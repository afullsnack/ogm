import { atom } from "nanostores";

export const $withdrawals = atom<any[]>([]);

export const addCryptoAddress = ({
  type,
  name,
  address,
}: {
  type: string;
  name: string;
  address: string;
}) => {
  // Add to db as well

  $withdrawals.set([...$withdrawals.get(), { name, address, type }]);
};

export const addPaypalEmail = ({
  email,
  type,
}: {
  email: string;
  type: string;
}) => {
  // Add to db as well

  $withdrawals.set([...$withdrawals.get(), { email, type }]);
};

interface IBank {
  type: string;
  bankName: string;
  bankAddress: string;
  bankCity: string;
  bankCountry: string;
  bankAccountNumber: string;
  swiftCode: string;
  name: string;
  address: string;
  country: string;
  city: string;
}
export const addBankAccount = ({
  bankName,
  bankAddress,
  bankCity,
  bankCountry,
  bankAccountNumber,
  swiftCode,
  name,
  address,
  country,
  city,
}: IBank) => {
  $withdrawals.set([
    ...$withdrawals.get(),
    {
      type,
      bankName,
      bankAddress,
      bankCity,
      bankCountry,
      bankAccountNumber,
      swiftCode,
      name,
      address,
      country,
      city,
    },
  ]);
};
