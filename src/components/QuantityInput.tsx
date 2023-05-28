'use client';

import UsersQuantity from '@/actions/usersQuantity';
import { useEffect, useState } from 'react';

interface QuantityInputProps {
  data: number[];
}
export default function QuantityInput(data: QuantityInputProps) {
  const [users, setUsers] = useState([]);
  return (
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
          UsersQuantity(parseInt(e.target.value)).then((res) => {});
        }}
      >
        <option defaultValue={'Choose your user'}>Choose your user</option>
        {users.length > 0 ? (
          users.map((item) => (
            // @ts-expect-error too lazy to type this
            <option key={item.login.uuid} value={item.id.value}>
              {/* @ts-expect-error too lazy to type this */}
              {item.name.first}
            </option>
          ))
        ) : (
          <option>Choose your user first</option>
        )}
      </select>
    </div>
  );
}
