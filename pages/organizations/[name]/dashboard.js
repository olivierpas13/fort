import AppLayout from 'layouts/app';
import DashboardComponent from 'components/Dashboard/Dashboard';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <AppLayout>
      <DashboardComponent/>
    </AppLayout>
  );
};

export default Dashboard;