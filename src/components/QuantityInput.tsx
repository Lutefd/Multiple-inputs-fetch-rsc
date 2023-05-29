'use client';

import UsersQuantity from '@/actions/usersQuantity';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import Image from 'next/image';

Amplify.configure({ ...awsExports, ssr: true });

interface QuantityInputProps {
  data: number[];
}
export default function QuantityInput(data: QuantityInputProps) {
  const [users, setUsers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <>
      <div className="flex flex-col place-items-center justify-center">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            UsersQuantity(parseInt(e.target.value)).then((res) => {
              setUsers(res.results);
            });
          }}
        >
          <option defaultValue={'Choose how many people'}>
            Choose how many people
          </option>

          {data.data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countrie"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            const user = users.find(
              (item: any) => item.name.first === e.target.value
            );
            if (!user) return;
            setSelectedUser(user);
          }}
        >
          <option defaultValue={'Choose your user'}>Choose your user</option>
          {users.length > 0 ? (
            users.map((item: any) => (
              <option key={item.login.uuid}>{item.name.first}</option>
            ))
          ) : (
            <option>Choose your user first</option>
          )}
        </select>
        {selectedUser && (
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              // @ts-ignore
              src={selectedUser.picture.large}
              alt="user"
              width={240}
              height={240}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {/* @ts-ignore */}
                {selectedUser.name.first} {selectedUser.name.last}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {/* @ts-ignore */}
                Email: {selectedUser.email} <br />
                {/* @ts-ignore */}
                Naturality: {selectedUser.nat} <br />
                {/* @ts-ignore */}
                Country: {selectedUser.location.country} <br />
                {/* @ts-ignore */}
                State: {selectedUser.location.state} <br />
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
