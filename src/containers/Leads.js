import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads, filteredLeads } from '../redux/leads';
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
    const { dispatch, leads, count, selections, selectedCareers } = this.props;
    return (
      <Layout>
        <Header count={count} selectedCareers={selectedCareers} />
        <Panel />
        <SearchCareer dispatch={dispatch} />
        <CareerPanel
          careers={leads}
          selections={selections}
        />
      </Layout>
    );
  }
}

export default connect(state => ({
  leads: filteredLeads(state),
  univs: state.univs.univs,
  token: state.token,
  selectedCareers: state.careers.careers,
  count: state.careers.count,
  selections: state.query.selections,
}))(Leads);
