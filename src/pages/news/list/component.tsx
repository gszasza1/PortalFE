import './design.scss';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { ProgressSpinner } from 'primereact/progressspinner';
import { ScrollPanel } from 'primereact/scrollpanel';
import React from 'react';

import { NewsListProps } from './connect';

interface Props extends NewsListProps {}
export class NewsListUnconnected extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.getNewsListData({});
    }
  }
  render() {
    return (
      <div className="new-list-wrapper">
        {this.props.isRequesting ? (
          <ProgressSpinner className="loading" />
        ) : (
          <Accordion className="new-list-container" multiple={true}>
            {this.props.data &&
              this.props.data.map(item => (
                <AccordionTab
                  key={item.id}
                  headerClassName="news-accordion-header"
                  header={item.title}
                >
                  <ScrollPanel style={{ width: "100%", height: "200px" }}>
                    {item.description}
                  </ScrollPanel>
                  <div className="news-accordion-footer">
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                    <p>{item.creator && item.creator}</p>
                  </div>
                </AccordionTab>
              ))}
          </Accordion>
        )}
      </div>
    );
  }
}
