import UsersQuantity from '@/actions/usersQuantity';
import QuantityInput from '@/components/QuantityInput';
import Image from 'next/image';

export default async function Home() {
  const getCountyData = async () => {
    const res = await fetch('http://localhost:3000/api/quantity', {
      next: {
        revalidate: 1,
      },
    });
    const data = await res.json();
    return data.numbers;
  };
  const quantity = (await getCountyData()) as number[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QuantityInput data={quantity} />
    </main>
  );
}
