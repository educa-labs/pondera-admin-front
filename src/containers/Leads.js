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

    this.getCareers = this.getCareers.bind(this);
  }

  getCareers(currentPage) {
    const { leadPages } = this.props;
    return leadPages.slice(0, currentPage + 1).reduce((leads, page) => (
      [...leads, ...page]
    ), []);
  }

  render() {
    const {
      dispatch,
      count,
      selections,
      selectedCareers,
      leadPages,
      currentPage,
      token,
    } = this.props;
    if (!token) return <div>Debes ingresar para acceder</div>
    return (
      <Layout>
        <Header count={count} selectedCareers={selectedCareers} />
        <Panel />
        <SearchCareer dispatch={dispatch} />
        <CareerPanel
          totalPages={leadPages.length}
          currentPage={currentPage}
          careers={this.getCareers(currentPage)}
        />
      </Layout>
    );
  }
}

export default connect(state => ({
  leadPages: filteredLeads(state),
  currentPage: state.leads.page,
  univs: state.univs.univs,
  token: state.token,
  selectedCareers: state.careers.careers,
  count: state.careers.count,
  selections: state.query.selections,
}))(Leads);
