import Table from "./Table/Table";

export default function Dashboard({ featureFlags, headers }) {
  return <Table featureFlags={featureFlags} headers={headers} />;
}
