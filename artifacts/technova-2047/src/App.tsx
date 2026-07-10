import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import AboutGreenTech from '@/pages/About';
import Solar from '@/pages/Solar';
import WindEnergy from '@/pages/Wind';
import EVMobility from '@/pages/EVMobility';
import Bioenergy from '@/pages/Bioenergy';
import WaterRivers from '@/pages/WaterRivers';
import PolicySchemes from '@/pages/PolicySchemes';
import Vision2047 from '@/pages/Vision2047';
import Team from '@/pages/Team';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about-green-tech" component={AboutGreenTech} />
        <Route path="/solar" component={Solar} />
        <Route path="/wind" component={WindEnergy} />
        <Route path="/ev-mobility" component={EVMobility} />
        <Route path="/bioenergy-waste" component={Bioenergy} />
        <Route path="/water-rivers" component={WaterRivers} />
        <Route path="/policy-schemes" component={PolicySchemes} />
        <Route path="/vision-2047" component={Vision2047} />
        <Route path="/team" component={Team} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
