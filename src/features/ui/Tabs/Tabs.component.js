import React, { useState, useEffect } from "react";
import { Tab, TabContent, TabHighlight, TabBodyWrapper } from "./Tabs.styles";

// Tab component for the Tabs component
const TabItem = ({ tab, onClickHandler, activeTab }) => {
  return (
    <Tab
      onClick={(e) => {
        e.preventDefault();
        onClickHandler(tab);
      }}
      tabId={tab}
      activeTab={activeTab}
    >
      {tab}

      <TabHighlight tabId={tab} activeTab={activeTab} />
    </Tab>
  );
};

// TabContent component for displaying the content of a selected tab
const TabBody = ({ tabId, content, activeTab }) => {
  return (
    <TabContent tabId={tabId} activeTab={activeTab}>
      {content}
    </TabContent>
  );
};

// Tabs component to display the tabs and change the content based on the tab selected.
export const Tabs = ({ contents = [], height = null }) => {
  const getHeaders = () => {
    return contents.map((content) => {
      return content.id;
    });
  };
  const [selectedTab, setSelectedTab] = useState(getHeaders()[0]);

  useEffect(() => {
    setSelectedTab(getHeaders()[0]);
  }, [contents]);

  const onClickHandler = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {getHeaders().map((tab) => (
        <TabItem
          key={tab}
          tab={tab}
          activeTab={selectedTab}
          onClickHandler={onClickHandler}
        />
      ))}

      <TabBodyWrapper height={height}>
        {contents.map((content) => (
          <TabBody
            key={content.id}
            tabId={content.id}
            content={content.component}
            activeTab={selectedTab}
          />
        ))}
      </TabBodyWrapper>
    </div>
  );
};
