export const Table = ({ netIncomes }) => {
  const totalReducer = (acc, company) => acc + company.income;
  const totalIncome = netIncomes.reduce(totalReducer, 0);
  const onAverage = totalIncome / netIncomes.length;
  return (
    <table style={{ border: "1px solid red" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid blue" }}>Marca</th>
          <th style={{ border: "1px solid blue" }}>Ingresos</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((company, index) => (
          <tr key={company.brand}>
            <td style={{ border: "1px solid blue" }}>{company.brand}</td>
            <td style={{ border: "1px solid blue" }}>{company.income}</td>
          </tr>
        ))}
      </tbody>
      <p>Promedio: {onAverage.toFixed(1)}</p>
    </table>
  );
};
