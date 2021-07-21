import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

// interface EnumServiceGetOrderBy {
//   [index: number]: { id: number; label: string; key: any };
// }

interface Ninja {
  id: number;
  username: string;
  name: string;
  email: string;
}

const Ninjas = ({ ninjas }: { ninjas: any }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: Ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
