'use server';
export default async function UsersQuantity(selectedQuantity: number) {
  const getRandomUsers = await fetch(
    'https://randomuser.me/api/?results=' + selectedQuantity
  );
  const randomUsers = await getRandomUsers.json();
  return randomUsers;
}
