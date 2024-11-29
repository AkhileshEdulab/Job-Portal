import { useState } from 'react';
import {  Combobox,  useCombobox } from '@mantine/core';
import { IconAdjustmentsFilled } from '@tabler/icons-react';

const opt = [
  'Relevence',
  'Most Recent',
  'Salary (Low to High)',
  'Salary (High to Low )',
  
];

const Short = ()=> {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevence');
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = opt
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Combobox
        store={combobox}
        width={240}
        position="bottom-start"
        withArrow
        withinPortal={false}
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
         
          <div className='border border-bright-sun-400 flex gap-2 p-3 rounded-full' onClick={() => combobox.toggleDropdown()}>
         <IconAdjustmentsFilled className='text-bright-sun-400 gap-2' /> Short By : {selectedItem}
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
export default Short;