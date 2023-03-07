import { useStore } from '../src/zustand/store';

export default function Home() {
  const { theme, setTheme } = useStore((state) => state);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}
