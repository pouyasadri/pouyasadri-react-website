import React, {memo} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import {Fade} from "react-reveal";
import {servicesPageData} from "../../portfolio.js";
import Button from "../../components/button/Button";

const Services = ({theme}) => {
    return (
        <div className="contact-main">
            <Header theme={theme}/>
            <div className="basic-contact">
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{marginBottom: "5rem 0", marginTop: "2rem"}}>
                        <div className="contact-heading-img-div" style={{marginRight: "5rem", marginTop: "20px"}}>
                            <img
                                style={{borderRadius: "15px"}}
                                src={require(`../../assests/images/${servicesPageData.services[0].imageUrl}`)}
                                alt={servicesPageData.services[0].altName}
                                title={servicesPageData.services[0].title}
                            />
                        </div>
                        <div className="contact-heading-text-div">
                            <h1
                                className="contact-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}
                            >
                                {servicesPageData.services[0].title}
                            </h1>
                            <p
                                className="contact-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[0].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=Inquiry: Full Stack Web Development Services"}
                                    theme={theme}
                                />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{margin: "5rem 0"}}>
                        <div className="blog-heading-text-div">
                            <h1 className="blog-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}>
                                {servicesPageData.services[1].title}
                            </h1>
                            <p
                                className="blog-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[1].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=Request: E-commerce Solutions Consultation"}

                                    theme={theme}
                                />
                            </div>
                        </div>
                        <div className="blog-heading-img-div" style={{marginLeft: "5rem"}}>
                            <img src={require(`../../assests/images/${servicesPageData.services[1].imageUrl}`)}
                                 alt={servicesPageData.services[1].altName}
                                 title={servicesPageData.services[1].title}
                                 style={{borderRadius: "15px"}}
                            />
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{margin: "5rem 0"}}>
                        <div className="contact-heading-img-div" style={{marginRight: "5rem"}}>
                            <img src={require(`../../assests/images/${servicesPageData.services[2].imageUrl}`)}
                                 alt={servicesPageData.services[2].altName}
                                 title={servicesPageData.services[2].title}
                                 style={{borderRadius: "15px"}}
                            />
                        </div>
                        <div className="contact-heading-text-div">
                            <h1
                                className="contact-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}
                            >
                                {servicesPageData.services[2].title}
                            </h1>
                            <p
                                className="contact-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[2].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=Interested in Custom CRM System Development"}
                                    theme={theme}
                                />
                            </div>
                        </div>

                    </div>
                </Fade>
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{margin: "5rem 0"}}>
                        <div className="blog-heading-text-div">
                            <h1 className="blog-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}>
                                {servicesPageData.services[3].title}
                            </h1>
                            <p
                                className="blog-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[3].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=Cloud Services Setup and Management Inquiry"}
                                    theme={theme}
                                />
                            </div>
                        </div>
                        <div className="blog-heading-img-div" style={{marginLeft: "5rem"}}>
                            <img src={require(`../../assests/images/${servicesPageData.services[3].imageUrl}`)}
                                 alt={servicesPageData.services[3].altName}
                                 title={servicesPageData.services[3].title}
                                 style={{borderRadius: "15px"}}
                            />
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{margin: "5rem 0"}}>
                        <div className="contact-heading-img-div" style={{marginRight: "5rem"}}>
                            <img src={require(`../../assests/images/${servicesPageData.services[4].imageUrl}`)}
                                 alt={servicesPageData.services[4].altName}
                                 title={servicesPageData.services[4].title}
                                 style={{borderRadius: "15px"}}
                            />
                        </div>
                        <div className="contact-heading-text-div">
                            <h1
                                className="contact-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}
                            >
                                {servicesPageData.services[4].title}
                            </h1>
                            <p
                                className="contact-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[4].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=Mobile App Development Project Discussion"}
                                    theme={theme}
                                />
                            </div>
                        </div>

                    </div>
                </Fade>
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{margin: "5rem 0"}}>
                        <div className="blog-heading-text-div">
                            <h1 className="blog-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}>
                                {servicesPageData.services[5].title}
                            </h1>
                            <p
                                className="blog-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[5].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=SEO Optimization Services Request"}
                                    theme={theme}
                                />
                            </div>
                        </div>
                        <div className="blog-heading-img-div" style={{marginLeft: "5rem"}}>
                            <img src={require(`../../assests/images/${servicesPageData.services[5].imageUrl}`)}
                                 alt={servicesPageData.services[5].altName}
                                 title={servicesPageData.services[5].title}
                                 style={{borderRadius: "15px"}}
                            />
                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={1000} distance="40px">
                    <div className="address-heading-div" style={{margin: "5rem 0"}}>
                        <div className="contact-heading-img-div" style={{marginRight: "5rem"}}>
                            <img src={require(`../../assests/images/${servicesPageData.services[6].imageUrl}`)}
                                 alt={servicesPageData.services[6].altName}
                                 title={servicesPageData.services[6].title}
                                 style={{borderRadius: "15px"}}
                            />
                        </div>
                        <div className="contact-heading-text-div">
                            <h1
                                className="contact-heading-text"
                                style={{color: theme.text, fontSize: "2.2rem", fontWeight: "bold"}}
                            >
                                {servicesPageData.services[6].title}
                            </h1>
                            <p
                                className="contact-header-detail-text subTitle"
                                style={{color: theme.secondaryText}}
                            >
                                {servicesPageData.services[6].subtitle}
                            </p>
                            <div className="resume-btn-div">
                                <Button
                                    text="Contact Me for this service"
                                    newTab={true}
                                    href={"mailto:info@pouyasadri.com?subject=Maintenance and Support Service Inquiry"}
                                    theme={theme}
                                />
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>
            <Footer theme={theme}/>
            <TopButton theme={theme}/>
        </div>
    );
}

export default memo(Services);
