'use server';

import { revalidate } from '@/app/api/quantity/route';

export default async function UsersQuantity(selectedQuantity: number) {
  const getRandomUsers = await fetch(
    'https://randomuser.me/api/?results=' + selectedQuantity,
    {
      next: { revalidate: 10 },
    }
  );
  const randomUsers = await getRandomUsers.json();
  return randomUsers;
}
