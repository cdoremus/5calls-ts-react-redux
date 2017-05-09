import * as React from 'react';
import {IIssue} from '../model';
import IssueList from './issue-list';

interface IProps {
  readonly issues: IIssue[];
  selectIssue: (issue: IIssue) => void;
}

interface IState {}

export default class Sidebar extends React.Component<IProps, IState> {

  render(): JSX.Element {

    return (
      <div style={{padding: '10 50', flexBasis: '25%'}}>
        <IssueList issues={this.props.issues} selectIssue={this.props.selectIssue}/>
      </div>
    );
  }
}
