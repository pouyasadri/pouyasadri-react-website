import React from "react";
import "./FaqAccordion.css";
import {Accordion, Panel} from "baseui/accordion";

const FaqAccordion = (props) => {
    const theme = props.theme;
    return (
        <div className="experience-accord">
            <Accordion>
                {props.faqData.map((faq) => {
                    return (
                        <Panel
                            className="accord-panel"
                            title={faq.question}
                            key={faq.id}
                            overrides={{
                                Header: {
                                    style: () => ({
                                        backgroundColor: `${theme.body}`,
                                        border: `1px solid`,
                                        borderRadius: `5px`,
                                        borderColor: `${theme.headerColor}`,
                                        marginBottom: `1rem`,
                                        fontFamily: "Google Sans Regular",
                                        fontSize: "1.5rem",
                                    }),
                                },
                                Content: {
                                    style: () => ({
                                        backgroundColor: `${theme.body}`,
                                    }),
                                },
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        color: theme.text,
                                        lineHeight: "1.625",
                                        textAlign: "left",
                                        fontSize: "1.2rem",
                                        fontFamily: "Google Sans Regular",
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>

                        </Panel>
                    );
                })}
            </Accordion>
        </div>
    );
}

export default FaqAccordion;
