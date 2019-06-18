import React, { Component } from 'react';
import { Tabs, Icon } from 'element-react';
import 'element-theme-default';
import * as SearchAPI from '../../API/search';
import { withRouter } from 'react-router-dom';
import CardList from '../Card-Search-List/cardList';
class TabsEntity extends Component {

  state = {
    searchKey: ''
  }

  async searchHandler(searchKey) {
    let result = await SearchAPI.search(searchKey);
    this.props.history.push(`/searchresult`, result);
  }
  render() {
    return (
      <>
        <form className="form-inline my-2 my-lg-0">
          <input onChange={(event) => { this.setState({ searchKey: event.target.value }) }}
            className="form-control mr-sm-2"
            type="text"
            placeholder="بحث" />
          <button
            onClick={(event) => { event.preventDefault(); this.searchHandler(this.state.searchKey) }}
            className="btn btn-secondary my-2 my-sm-0"
            type="submit">بحث</button>
        </form>
        <Tabs type="card" value="1">
          <Tabs.Pane label="User" name="1">User</Tabs.Pane>
          <Tabs.Pane label="Config" name="2">Config</Tabs.Pane>
          <Tabs.Pane label="Role" name="3">Role</Tabs.Pane>
          <Tabs.Pane label="Task" name="4">Task</Tabs.Pane>
        </Tabs>
      </>
    )
  }
}
export default withRouter(TabsEntity);
