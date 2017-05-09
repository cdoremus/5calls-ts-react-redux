import * as React from 'react';
import SidebarContainer from './sidebar-container';
import CallDetailContainer from './call-detail-container';

interface IProps {}

interface IState {}

export class Main extends React.Component<IProps, IState> {

  public render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <SidebarContainer />
          <CallDetailContainer />
        </div>
      </div>
    );
  }
}

export default Main;
