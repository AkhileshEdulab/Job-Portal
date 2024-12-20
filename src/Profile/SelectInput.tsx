
import { useState, useEffect, useMemo } from 'react';
import { Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';

const SelectInput = (props: any) => {
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

 
  useEffect(() => {
    setData(props.options || []);   
    setValue(props.value || null);   
    setSearch(props.search || '');   
  }, [props.options, props.value, props.search]);

  
  const exactOptionMatch = data.some((item) => item === search);
  const filteredOptions = useMemo(() => {
    if (exactOptionMatch) return data;
    return data.filter(
      (item) =>
        typeof item === 'string' &&
        item.toLowerCase().includes((search || '').toLowerCase().trim())
    );
  }, [data, search, exactOptionMatch]);

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === '$create' && search.trim()) {
          setData((current) => [...current, search]);
          setValue(search);
        } else {
          setValue(val);
          setSearch(val);
        }

        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          withAsterisk
          label={props.label}
          leftSection={props.leftSection && <props.leftSection stroke={1.5} />}
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder={props.placeholder}
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type="scroll">
            {options}
            {!exactOptionMatch && search.trim().length > 0 && (
              <Combobox.Option value="$create">
                + Create {search}
              </Combobox.Option>
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
