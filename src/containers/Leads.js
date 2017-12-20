import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads } from '../redux/leads';
import { getUnivs } from '../redux/univs';
import Layout from '../components/Layout/LeadsLayout';
import Card from '../styled/Card';
import Header from '../components/Leads/Header';
import Panel from '../components/Univs/UniversityPanel';
import SearchCareer from '../components/Careers/SearchInput';

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
    return (
      <Layout>
        <Header />
        <Panel />
        <SearchCareer />
      </Layout>
    );
  }
}

export default connect(state => ({
  leads: state.leads.leads,
  univs: state.univs.univs,
  token: state.token,
}))(Leads);
