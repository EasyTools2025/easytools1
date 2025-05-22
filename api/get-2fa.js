import { totp } from 'otplib';

export default function handler(req, res) {
  const secret = 'MTQ4S3RHBQJGD2KCPOYDD6F5MWZ2K25I';
  const token = totp.generate(secret);
  res.status(200).send(token);
}
