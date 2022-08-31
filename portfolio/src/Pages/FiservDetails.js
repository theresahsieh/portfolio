import { Grid, Typography } from "@material-ui/core";
import Stakeholders from "./resources/Fiserv/fiservStakeholders.jpeg";
import * as myStyles from "../MyStyles";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import SectionHeader from "./SectionHeader";
import FiservCover from "./resources/Fiserv/FiservCover.png";

const fiservIcon = {
    ...myStyles.icon,
    backgroundColor: myStyles.fiserv.primary,
};

const FiservDetails = () => {
    return (
        <div>
            <img
                src={FiservCover}
                alt="Cover"
                style={myStyles.coverImageStyle}
            ></img>
            <Grid
                container
                spacing={1}
                alignItems="top"
                style={myStyles.gridInformation}
            >
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    style={{ marginBottom: "-3rem" }}
                >
                    <div>
                        <Typography variant="h1">
                            Fiserv: Crypto + Online Banking
                        </Typography>
                        <div style={{ paddingBottom: "32px" }}>
                            <span style={myStyles.chipStyle}>Case Study</span>
                            <span style={myStyles.chipStyle}>
                                UX Design / UX Research
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"Problem Space"}
                    />
                    <Typography
                        variant="h6"
                        component="p"
                        style={myStyles.textBlock}
                    >
                        Cryptocurrency is a relatively new and unknown
                        technology. However, in the past decade, it has gained
                        popularity as a potentially powerful digital currency.
                        If cryptocurrency is to become a permanent and useful
                        feature in everyday life, it will need to gain
                        legitimacy through secure and convenient access. One way
                        for cryptocurrency to take the next step away towards
                        widespread acceptance is to integrate into everyday
                        banking services and experiences.
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        style={{ ...myStyles.textBlock, marginLeft: "2.5rem" }}
                    >
                        <em>
                            Would it be beneficial for banks and their users to
                            incorporate cryptocurrency options into current
                            online banking services?
                        </em>
                    </Typography>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"User Experience Research"}
                    />
                    <Typography variant="body2" component="p">
                        In order to better understand our problem space and
                        determine user needs, we employed a series of research
                        methods to explore the attitudes, behaviors and beliefs
                        of both crypto owners and non-crypto owners.
                    </Typography>
                    <Typography variant="h3">
                        Literature Review and Background Research
                    </Typography>
                    <Typography variant="body2" component="p">
                        We began with researching the context for our problem
                        space, including the history of the cryptocurrencies,
                        existing issues, and concerns, along with future
                        projections for technology in the space. Knowing this
                        background is the foundation for understanding the
                        goals, needs, and frustrations of our target users in
                        this space.
                    </Typography>
                    <Typography variant="body2" component="p">
                        After an exploration of more than 50 articles, we felt
                        that we had sufficiently established a foundation of
                        knowledge. We developed a stakeholder analysis of the
                        people who would be impacted by cryptocurrency
                        developments and discovered a set of new advances in the
                        applications of cryptocurrencies. Applications of proof
                        of stake, the Lightning Network, smart contracts, and
                        NFTs seem to be exciting new advancements that have the
                        potential to increase uses for cryptocurrencies.
                    </Typography>
                    <Typography variant="h3">
                        Concerns and Uncertainties{" "}
                    </Typography>
                    <Typography variant="body2" component="p">
                        The following categories are known areas of concern in
                        the cryptocurrency space. I compiled this list as a
                        synthesis of relevant pain points to be aware of when
                        interviewing crypto users.
                    </Typography>
                    <Grid container spacing={3} alignItems="top">
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                style={myStyles.textBlock}
                            >
                                <TrendingDownIcon style={fiservIcon} />
                                <span style={{ fontWeight: "normal" }}>
                                    Volatility
                                </span>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    style={{
                                        ...myStyles.listStyle,
                                        fontWeight: "300",
                                    }}
                                >
                                    The prices of cryptocurrencies have been
                                    known to fluctuate widely. Like other
                                    investment stocks, their value can be
                                    influenced by a number of factors, including
                                    Tweets from Elon Musk that increased prices
                                    for Dogecoin up 30 percent.
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                style={myStyles.textBlock}
                            >
                                <DoNotTouchIcon style={fiservIcon} />
                                <span style={{ fontWeight: "normal" }}>
                                    Theft
                                </span>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    style={{
                                        ...myStyles.listStyle,
                                        fontWeight: "300",
                                    }}
                                >
                                    As with any item with perceived monetary
                                    value, cryptocurrency is vulnerable to theft
                                    operations. In 2019 alone, twelve crypto
                                    exchanges were hacked, affecting 510,000
                                    users and costing nearly 3 million USD.
                                    Furthermore, personally held private keys
                                    can be stolen either due to digital hacking
                                    or physical theft.
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                style={myStyles.textBlock}
                            >
                                <VpnKeyIcon style={fiservIcon} />
                                <span style={{ fontWeight: "normal" }}>
                                    Loss of Keys
                                </span>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    style={{
                                        ...myStyles.listStyle,
                                        fontWeight: "300",
                                    }}
                                >
                                    Individuals that store their own
                                    cryptocurrencies face the possibility of
                                    losing their private keys. Forgetting their
                                    passcodes or damaging a hard wallet can
                                    result in the permanent loss of their
                                    cryptocurrency. There are an estimated 3.7
                                    million coins (i.e. $148 billion) in such
                                    lost money.
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                style={myStyles.textBlock}
                            >
                                <PublicIcon style={fiservIcon} />
                                <span style={{ fontWeight: "normal" }}>
                                    Sustainability
                                </span>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    style={{
                                        ...myStyles.listStyle,
                                        fontWeight: "300",
                                    }}
                                >
                                    Mining cryptocurrencies is an
                                    energy-intensive process. Bitcoin currently
                                    consumes 0.55% of global electricity
                                    production, and frequently replaced mining
                                    equipment produces approximately 30,700 tons
                                    of e-waste per year.
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                style={myStyles.textBlock}
                            >
                                <AccountBalanceIcon style={fiservIcon} />
                                <span style={{ fontWeight: "normal" }}>
                                    Government Regulation
                                </span>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    style={{
                                        ...myStyles.listStyle,
                                        fontWeight: "300",
                                    }}
                                >
                                    Due to its decentralized nature, governments
                                    do not have control over cryptocurrencies.
                                    The international community has yet to
                                    collectively agree on regulation terms, so
                                    individual countries have decided to deal
                                    with cryptocurrencies differently. In this
                                    project, we will only be considering users
                                    within the United States.
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ verticalAlign: "middle" }}
                        >
                            <Typography
                                variant="h6"
                                component="p"
                                style={myStyles.textBlock}
                            >
                                <FaceRetouchingOffIcon style={fiservIcon} />
                                <span style={{ fontWeight: "normal" }}>
                                    Anonymity
                                </span>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    style={{
                                        ...myStyles.listStyle,
                                        fontWeight: "300",
                                    }}
                                >
                                    The concept of anonymity in the
                                    cryptocurrency space is tied to its history
                                    and even the real identity of the creator of
                                    Bitcoin Satoshi Nakamoto is unknown. Many
                                    users of cryptocurrency prefer to stay
                                    anonymous whether for personal privacy
                                    reasons or because of the type of activities
                                    they are conducting online (e.g. illegal
                                    activities).
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h3">Stakeholder Analysis</Typography>
                    <Typography variant="body2" component="p">
                        The following stakeholder analysis depicts the people
                        and companies who may be affected by the integration of
                        cryptocurrencies into online banking. Stakeholders
                        closer to the bottom center are likely to be more
                        directly impacted, with less involved parties on the
                        outer edges.
                    </Typography>
                    <img
                        src={Stakeholders}
                        alt="Stakeholder Anaylsis"
                        style={{ width: "80%", marginLeft: "10%" }}
                    />
                    <Typography
                        variant="subtitle1"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        Stakeholder analysis diagram that I created in Miro
                    </Typography>
                </Grid>
                <Grid container item xs={12} md={8}>
                    <SectionHeader
                        color={myStyles.fiserv.primary}
                        header={"Future Work"}
                    />
                    <Typography variant="body2" component="p">
                        This project is currently underway and will be updated
                        as more work is completed!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default FiservDetails;
