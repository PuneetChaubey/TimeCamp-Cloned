import React, { useState } from "react";
import Footer from "../Components/Footer";
import { ItegrationsItem } from "../Components/ItegrationsItem";
import Navbar from "../Components/Navbar";
import style from "../Styles/Integrations.module.css";

const data = [
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/mondaycom.png",
    title: "Monday.com",
    description:
      "Track time directly from your projects andtasks thanks to Monday.com integration",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png",
    title: "Podio",
    description:
      "Use TimeCamp to track time spent on all ofyour tasks and projects in Podio",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png",
    title: "Smartsheet",
    description: "Track time to all your tasks in samrthee",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png",
    title: "Todoist",
    description: "Measure the time on allm your Todoist list and tasks",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png",
    title: "Trello",
    description: "Track time of your Trello boards, projects and tasks",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/wrike.png",
    title: "Wrike",
    description:
      "Import of you tasks and projects to TimeCamp to enable time tracking",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/activecollab.png",
    title: "ActiveCollab",
    description:
      "Track time directly from your projects and tasks thanks to ActiveCollab integration",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/breeze.png",
    title: "Breeze",
    description:
      "Track time directly from ypur projects thanks to Breeze integration",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/easyredmine.png",
    title: "Easy Redmine",
    description:
      "Measure the time-consumption of each task and invoice your customers accurately thanks to Esay Redmine integration",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/fibery.png",
    title: "Evernote",
    description:
      "Import your notebooks and particular notes from Evernote to TimeCamp and track their time",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/zendesk.png",
    title: "Zendesk",
    description: "Track time to all your Zendesk tickets",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/freshdesk.png",
    title: "Freshdesk",
    description:
      "Let your team track time against tickets it has to solve in thanks to frea=shdesk integration",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png",
    title: "Asana",
    description:
      "Import all your Opportunities, Projects, Tasks,Contacts, Organizations and Leads to Time Camp",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/azuredevops.png",
    title: "Azure DevOps",
    description:
      "Track time directly from your projects thanks to Azure DevOps integration",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/clickup.png",
    title: "ClickUp",
    description:
      "Increase team productivity measuring howmuch time they spend on singular activities from ClickUp thanks to TimeCamp integration",
    category: "project_management",
  },
  {
    image: "https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png",
    title: "Jira",
    description: "Track the time spent on any issue defined inJira",
    category: "project_management",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/freshservice.png",
    title: "FrashService ",
    description:
      "With TimeCamp Chrom extension you can easily track time for tickets in FreshService",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/liveagent.jpg",
    title: "LiveAgent",
    description:
      "Add simple and easy-to-use time tracker to your tickets inLiveAgent",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/osticket.png",
    title: "osTicket",
    description:
      "Seamlessly track time for tickets in osTicket app with chrome extension",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/spidergap.png",
    title: "Spidergap",
    description:
      "Track time you spend on feedback reports in Spidergap using TimeCamp Chrome plugin",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/zammad.png",
    title: "Zammad ",
    description: "Track timer for tickets directly in Zammad application",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/protonmail.png",
    title: "Protonmail",
    description:
      "Measure time for emails in Protonmail with TimeCamp Chrome extension",
    category: "heldesk",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/airtable.png",
    title: "Airtable",
    description:
      "Measure time for projects and tasks in Airtable using TimeCamp chrome extension",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png",
    title: "Google Calender",
    description: "Measure the time spent on your Google Calender events",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/googledocs.png",
    title: "Google Docs",
    description: "TimeCamp chrome extension for measuring time in google Docs",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/gmail.svg",
    title: "Google Mail",
    description:
      "Measure time for yoyr emails with TimeCamp Chrome plugin that works in GMail",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/microsoftteams.png",
    title: "Microssoft Teams",
    description:
      "Track time directly from your projects and task thanks to Microsoft Teams integration",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png",
    title: "Slack",
    description: "Track time for all your Slack channels and chats",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/heyspace.png",
    title: "HeySpace",
    description:
      "Track time in our free task management software with communication and collaboration feature",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/dropboxpaper.png",
    title: "Dropbox Paper",
    description:
      "Track time directly from your docs and tasks thanks to Dropbox Paper integration",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/dokuwiki.png",
    title: "DokuWiki ",
    description:
      "Add time tarcking button to your DokuWiki app with this Chorme plugin",
    category: "Collaboration",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png",
    title: "Quickbooks Online",
    description:
      "Import all your clients and accounts and track the time you spend on them",
    category: "Accounting & Invoicing",
  },
  {
    image: "https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png",
    title: "Xero",
    description:
      "Iport all of your clients and accounts in Xero and track the time you spend on them",
    category: "Accounting & Invoicing",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/insightly.png",
    title: "Insightly",
    description:
      "Track time for all your Opportunities, Projects, Tass, Contacts,Organizations and Leads",
    category: "Crm and sale",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/pipedrive.png",
    title: "Pipedrive",
    description:
      "Track time for deals in Pipedrive with TimeCamp chrome extension",
    category: "Crm and sale",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/salesforce.png",
    title: "Salesforce",
    description:
      "Track time directly from your projects thanks to SalesForce integration",
    category: "Crm and sale",
  },
  {
    image: "https://cdn-m.timecamp.com/img/greenbranding/integrations/zoho.png",
    title: "ZOHO CRM",
    description: "Track time for all your Zoho CRM activities",
    category: "Crm and sale",
  },
  {
    image:
      "https://cdn-m.timecamp.com/img/greenbranding/integrations/minicrm.png",
    title: "MiniCRM",
    description: "Use Time Plugin to Track time for MiniCRM tasks",
    category: "Crm and sale",
  },
  {
    image: "https://cdn-m.timecamp.com/img/greenbranding/integrations/odoo.png",
    title: "Odoo",
    description:
      "Record time for different activitie directly in Odoo aplication",
    category: "Crm and sale",
  },
];
const Integrations = () => {
  const [flag, setFlag] = useState("");
  const handleClick = (category) => {
    if (category) {
      setFlag(category);
    } else setFlag("");
  };

  return (
    <>
      <Navbar />
      <div className={style.Cont}>
        <div className={style.Box_1}>
          <div className={style.cont_2}>
            <h4>Integrate TimeCamp with your favorite apps</h4>
            <p>
              No need to change your current workflow. Use TimeCamp alongside
              your other trusted tools.
            </p>
            <div className={style.cont_btn}>
              <button className={style.btn_1}>
                <i className="fa-brands fa-chrome"></i>
                <label>Track time in Chrome</label>
              </button>
              <button className={style.btn_1}>
                <i className="fa-brands fa-edge"></i>
                <label>Track time in Edge</label>
              </button>
            </div>
          </div>
          <div className={style.cont_2}>
            <img
              className={style.logo_img}
              src="https://cdn-m.timecamp.com/img/greenbranding/rightHero.png"
              alt="Logo_Images"
            />
          </div>
        </div>
        <div className={style.link_cont}>
          <div
            className={flag ? "" : style.selected_filter}
            onClick={() => handleClick()}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/all.svg"
                alt=""
              />
            </div>
            <p>All</p>
          </div>
          <div
            className={
              flag === "project_management" ? style.selected_filter : ""
            }
            onClick={() => handleClick("project_management")}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/pm.svg"
                alt=""
              />
            </div>
            <p>Project management</p>
          </div>
          <div
            className={flag === "heldesk" ? style.selected_filter : ""}
            onClick={() => handleClick("heldesk")}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/hd.svg"
                alt=""
              />
            </div>
            <p>Helpdesk</p>
          </div>

          <div
            className={flag === "Collaboration" ? style.selected_filter : ""}
            onClick={() => handleClick("Collaboration")}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/collab.svg"
                alt=""
              />
            </div>
            <p>Collaboration</p>
          </div>
          <div
            className={flag === "Develoment" ? style.selected_filter : ""}
            onClick={() => handleClick("Develoment")}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/collab.svg"
                alt=""
              />
            </div>
            <p>Development</p>
          </div>

          <div
            className={
              flag === "Accounting & Invoicing" ? style.selected_filter : ""
            }
            onClick={() => handleClick("Accounting & Invoicing")}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/acc.svg"
                alt=""
              />
            </div>
            <p>Accounting & Invoicing</p>
          </div>
          <div
            className={flag === "Crm and sale" ? style.selected_filter : ""}
            onClick={() => handleClick("Crm and sale")}
          >
            <div className={style.link_box}>
              <img
                src="https://cdn-m.timecamp.com/img/greenbranding/crm.svg"
                alt=""
              />
            </div>
            <p>CRM & Sales</p>
          </div>
        </div>
        <div className={style.div_cont_bottom}>
          {flag
            ? data
                .filter((item) => item.category === flag)
                .map((item, ind) => {
                  return (
                    <div key={ind}>
                      <ItegrationsItem item={item} ind={ind} />
                    </div>
                  );
                })
            : data.map((item, ind) => {
                return (
                  <div key={ind}>
                    <ItegrationsItem item={item} ind={ind} />
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Integrations;
