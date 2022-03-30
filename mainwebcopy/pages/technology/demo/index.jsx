import Head from 'next/head';
import { useTheme } from '@material-ui/core/styles';
import Layout from '../../../components/layout';
import DemoIntroLandingPanel from '../../../components/technology/demo/DemoIntroLandingPanel';
import DemoIntroLocalPanel from '../../../components/technology/demo/DemoIntroLocalPanel';
import DemoIntroHowItWorksPanel from '../../../components/technology/demo/DemoIntroHowItWorksPanel';
import DemoIntroRegistrationPanel from '../../../components/technology/demo/DemoIntroRegistrationPanel';

export default function Index() {
  const theme = useTheme();

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Schedule a Demo | ParallelChain Lab</title>
        <meta
          name="description"
          content="Throughout and latency on ParallelChain™ are faster than any other existing blockchains. Experience this yourself by scheduling a three-part personalised demo."
        />
      </Head>
      <DemoIntroLandingPanel />
      <DemoIntroLocalPanel />
      <DemoIntroHowItWorksPanel />
      <DemoIntroRegistrationPanel />
    </Layout>
  );
}