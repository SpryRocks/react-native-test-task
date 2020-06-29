import {Linking} from 'react-native';

export async function sendEmail(data) {
  // const to = 'hr@spryrocks.com';
  const to = 'mask238@gmail.com';
  const subject = `${data.fullName}`;
  let userData = '';

  for (const key in data) {
    if (data[key] !== '') {
      userData += `${key}: ${data[key]}\n`;
    }
  }

  const body = `${userData}`;
  const url = `mailto:<${to}>?subject=${subject}&body=${body}`;

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}
