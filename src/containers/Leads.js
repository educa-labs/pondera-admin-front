import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads } from '../redux/leads';
import { getUnivs } from '../redux/univs';
import Layout from '../components/Layout/LeadsLayout';
import Header from '../components/Leads/Header';
import Panel from '../components/Univs/UniversityPanel';
import SearchCareer from '../components/Careers/SearchInput';
import CareerPanel from '../components/Careers/CareerPanel';

class Leads extends Component {
  componentWillMount() {
    if (!this.props.leads && this.props.token) {
      this.props.dispatch(getLeads(this.props.token));
    }
    if (!this.props.univs && this.props.token) {
      this.props.dispatch(getUnivs(this.props.token));
    }
  }
  render() {
    const { dispatch } = this.props;
    return (
      <Layout>
        <Header />
        <Panel />
        <SearchCareer dispatch={dispatch} />
        <CareerPanel
          careers={this.props.leads}
          selections={this.props.selections}
        />
      </Layout>
    );
  }
}

export default connect(state => ({
  leads: state.leads.leads,
  univs: state.univs.univs,
  token: state.token,
  selections: state.query.selections,
}))(Leads);
