export default function Home() {
  const handleSair = () => {
    localStorage.clear();
  };
  return (
    <div>
      <button onClick={handleSair}>SAIR</button>
      ESTOU NA HOME
    </div>
  );
}
