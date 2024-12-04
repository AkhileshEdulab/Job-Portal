import { useState } from 'react';
import {Button,Modal,PinInput,PasswordInput,TextInput,Tooltip,Group,} from '@mantine/core';
import { IconAt, IconLock, IconRefresh, IconEdit, IconCheck } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';
import { sendOtp, verifyOtp, changePassword } from '../Services/UserServices'; 

const ResetPassword = (props: any) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleSendOtp = async () => {
    setOtpSending(true);
    try {
      await sendOtp({ email });
      showNotification({
        title: 'OTP Sent Successfully',
        message: `We sent an OTP to ${email}. Please check your inbox.`,
        color: 'green',
        icon: <IconCheck size={16} />,
      });
      setOtpSent(true);
    } catch (error) {
      showNotification({
        title: 'Error Sending OTP',
        message: 'Failed to send OTP. Try again later.',
        color: 'red',
      });
    } finally {
      setOtpSending(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyOtp(email, otp);
      showNotification({
        title: 'OTP Verified',
        message: 'You can now reset your password.',
        color: 'green',
        icon: <IconCheck size={16} />,
      });
      setOtpVerified(true);
      setOtpError('');
    } catch (error) {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleResetPassword = async () => {
    setIsSubmitting(true);
    try {
      await changePassword(email, newPassword);
      showNotification({
        title: 'Password Reset Successful',
        message: 'You can now log in with your new password.',
        color: 'green',
        icon: <IconCheck size={16} />,
      });
      props.close();
    } catch (error) {
      showNotification({
        title: 'Error Resetting Password',
        message:'Failed to reset password. Try again later.',
        color: 'red',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeEmail = () => {
    setEmail('');
    setOtpSent(false);
    setOtpVerified(false);
    setOtp('');
  };

  const handleResendOtp = () => {
    setOtp('');
    handleSendOtp();
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Your Password">
      <div className="flex flex-col gap-6">
        {!otpSent && (
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftSection={<IconAt size={16} />}
            rightSection={
               
              <Tooltip label="Send OTP to your email">
                <Button
        autoContrast
        size='xs'
        mr={1}
        onClick={handleSendOtp}
        loading={otpSending}
        disabled={!email.trim()}
        variant="filled"
      >
        Send OTP
      </Button>
              </Tooltip>
            }
          />
        )}

        {otpSent && !otpVerified && (
          <>
            <PinInput
              type="number"
              length={6}
              placeholder="Enter OTP"
              value={otp}
              onChange={setOtp}
              onComplete={() => handleVerifyOtp()}
            />
            {otpError && <p className="text-red-500 text-sm">{otpError}</p>}
            <Group mt="sm">
              <Button
                
                variant="outline"
                leftSection={<IconRefresh size={16} />}
                onClick={handleResendOtp}
              >
                Resend OTP
              </Button>
              <Button
                size="xs"
                variant="subtle"
                color="red"
                leftSection={<IconEdit size={16} />}
                onClick={handleChangeEmail}
              >
                Change Email
              </Button>
            </Group>
          </>
        )}

        {otpVerified && (
          <PasswordInput
            label="New Password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            leftSection={<IconLock size={16} />}
            withAsterisk
          />
        )}

        {otpVerified && (
          <Button
            variant="filled"
            color="blue"
            onClick={handleResetPassword}
            loading={isSubmitting}
            disabled={!newPassword.trim()}
            mt="lg"
          >
            Reset Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
