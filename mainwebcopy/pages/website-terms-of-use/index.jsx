import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Layout from '../../components/layout';
import Section from '../../components/Section';

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    position: 'relative',
    paddingTop: `${theme.spacing(14)}px`,
    textAlign: 'left',
  },
}));

export default function JoinUs({ openings }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Layout
      background={theme.palette.neutral.white}
    >
      <Head>
        <title>Terms of Use | ParallelChain Lab</title>
        <meta
          name="description"
          content="Terms and Conditions."
        />
      </Head>
      <div className={classes.titleContainer}>
        <Section>
          <Typography variant="h4">
            ParallelChain.io Website Terms of Use
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            BEFORE USING THIS WEBSITE PLEASE READ THE TERMS OF USE SET FORTH BELOW, AS THEY APPLY TO YOUR USE OF THIS WEBSITE. BY USING AND CONTINUING ACCESS TO THIS WEBSITE, YOU SHALL CONCLUSIVELY BE DEEMED TO HAVE ACCEPTED THE TERMS OF USE SET FORTH BELOW.
            <br /><br />
            This website is maintained by ParallelChain Lab Limited (Hong Kong) and ParallelChain Limited (Bahamas).
          </Typography>
          <br />
          <Typography variant="h5">
            Definitions
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            In these Terms of Use, the following words and expressions shall have the following meanings: – “Information” means information, data, text, content, analysis, news, reports, programmes, photographs, picture, graphics, video, audio, software and other materials, communications, transmissions and other items, tangible or intangible; “Terms of Use” means the terms of use set out below as amended from time to time; “we”, “our” or “us” means ParallelChain Lab Limited (Hong Kong) and ParallelChain Limited (Bahamas) collectively.
          </Typography>
          <br />
          <Typography variant="h5">
            Changes to Website
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            We may, in our sole discretion and at any time, without notice to you, add to, amend or remove any Information from this Website, or alter the presentation, substance, or functionality of this Website.
          </Typography>
          <br />
          <Typography variant="h5">
            Changes of Terms
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            We may amend, add or delete any provision of the Terms of Use from time to time in our sole discretion and such amendment, addition or deletion shall be effective immediately upon either posting the modified Terms of Use or notifying you. You agree to review these Terms of Use periodically to ensure that you are aware of any modifications. Your continued access of and use of the Information of this Website and Services following such amendments to the Terms of Use, shall conclusively be deemed to be your acceptance of the modified Terms of Use.
          </Typography>
          <br />
          <Typography variant="h5">
            Data Accuracy Disclaimer
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            We have always exercised its best efforts to conduct in good faith and has taken reasonable care to ensure that the information on this website is accurate, current, complete, fit for its intended purpose and compliant with applicable law and regulation as at the date of publishing. No warranty or representation of any kind regarding the accuracy, validity or completeness of the information on this website is given and, to the extent permitted by applicable laws, no liability is accepted for the accuracy or completeness of such information. We accept no liability for any loss or damage arising directly or indirectly from action taken, or not taken, in reliance on information or materials contained on this website.
            <br /><br />
            We provide information to third-parties such as media agencies and analysts to assist in marketing activities. The information provided at the time may now be obsolete, we expressly reject any liability for damages of any kind resulting from the use, reference to, or reliance on such information. In the event of any inconsistency between the information on this website and external sources, the former shall prevail.
            <br /><br />
            The links on this Website may take you to other sites that are not under our control. Links to other websites do not constitute an endorsement by us of such websites or the Information, products, advertising or other materials available on those websites. You acknowledge and agree that we have no responsibility for the content, accuracy or availability of any Information provided by linked websites or liable for any loss or damage caused by, arising out of or in connection with use of or reliance on any Information, materials, goods or services available on or through any such websites.
          </Typography>
          <br />
          <Typography variant="h5">
            Performance Disclaimer
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            There has not yet been any recognized and accepted benchmarking tools internationally available specifically for blockchain technology. And even if such internationally accepted benchmarking tools are available, there is no guarantee that the test results generated from those benchmarking tools would reflect the performance outcome in real world environment. We acknowledge such reality and therefore, hereby disclaims that the performance stated in this website may differ when deployed in real world environment.
            <br /><br />
            By using ParallelChain (the “Technology”) or a software product powered by the Technology, you understand and accept that its operation and performance may be subject to a variety of factors out of our control, such factors include, but are not limited to: network traffic congestion, bandwidth, sufficient knowledge possessed by you or your staff in the installation and operation of the software, and more. The performance stated in this website is based on the test standards under specific circumstances. We cannot guarantee that the Technology, when used in different situations, will achieve the results you expect.
          </Typography>
          <br />
          <Typography variant="h5">
            Business Disclaimer
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            This website does not constitute an offer to sell, a solicitation of an offer to buy XPLL, the token issued by ParallelChain Limited (Bahamas) or any other tokens. Nothing in this website is intended to provide investment or legal advice and nothing in this website should be construed as a recommendation to buy or sell tokens or to engage in any investment or transaction. You are solely responsible for determining whether any token purchase, investment strategy, or related transaction is appropriate for you based on your own circumstances and risk tolerance.
            <br /> <br />
            Nothing in this website should be treated or read as a guarantee or promise of how our business or the tokens will develop or of the utility or value of the tokens. This website outlines current plans, which could change at our discretion, and the success of which will depend on many factors outside our control, including market-based factors and factors within the data and the blockchain and cryptocurrency industries, among others. Any statements about future events are based solely on our analysis of the issues described in this website. That analysis may prove to be incorrect in spite of our good faith and best efforts.
          </Typography>
          <br />
          <Typography variant="h5">
            Indemnity
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            You agree to defend, indemnify and hold us, our subsidiaries, affiliates and their respective directors, officers, employees and agents harmless from and against all liabilities, damages, claims, actions, costs and expenses (including without limitation legal fees), in connection with or arising from your breach of any of these Terms of Use and/or your use of this Website. We may, if necessary, participate in the defence of any claim or action and any negotiations for settlement in respect of the aforesaid matters. No settlement which may adversely affect our rights or obligations shall be made without our prior written approval. We reserve the right to assume defence and control of any claim or action exclusively.
          </Typography>
          <br />
          <Typography variant="h5">
            Governing Law and Jurisdiction
          </Typography>
          <br />
          <Typography variant="subtitle1" display="block">
            The Terms of Use for matters concerning ParallelChain Mainnet and ICO, including but not limited to, token offerings, tokenomics, roadmap, timeline, shall be governed by the law of The Bahamas; the Terms of Use for matters other than the preceding shall be governed by the law of the Hong Kong SAR. You agree to submit to the exclusive jurisdiction of The Bahamas and the Hong Kong courts respectively.
          </Typography>
          <br />

        </Section>
      </div>
    </Layout>
  );
}

JoinUs.propTypes = {
  openings: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.number,
  })).isRequired,
};