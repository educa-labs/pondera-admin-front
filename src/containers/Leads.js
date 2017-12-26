import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeads, filteredLeads, leadsCount } from '../redux/leads';
import { getUnivs } from '../redux/univs';
import { getCount } from '../redux/count';
import Layout from '../components/Layout/LeadsLayout';
import Header from '../components/Leads/Header';
import Panel from '../components/Univs/UniversityPanel';
import SearchCareer from '../components/Careers/SearchInput';
import CareerPanel from '../components/Careers/CareerPanel';

class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    this.getCareers = this.getCareers.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }
  componentWillMount() {
    if (!this.props.leads && this.props.token) {
      this.props.dispatch(getLeads(this.props.token));
    }
    if (!this.props.univs && this.props.token) {
      this.props.dispatch(getUnivs(this.props.token));
    }
    if (!this.props.userCount && this.props.token) {
      this.props.dispatch(getCount(this.props.token));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.loading !== this.props.loading) {
      this.setState({ date: new Date() });
    }
  }

  onRefresh() {
    this.props.dispatch(getLeads(this.props.token));
    this.props.dispatch(getCount(this.props.token));
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
      loading,
      userCount,
      leadsCount,
    } = this.props;
    if (!token) return <div>Debes ingresar para acceder</div>
    return (
      <Layout>
        <Header
          userCount={userCount}
          count={count}
          selectedCareers={selectedCareers}
          leadsCount={leadsCount}
        />
        <Panel />
        <SearchCareer dispatch={dispatch} />
        <CareerPanel
          onRefresh={this.onRefresh}
          loading={loading}
          totalPages={leadPages.length}
          currentPage={currentPage}
          careers={this.getCareers(currentPage)}
          date={this.state.date.toLocaleString()}
        />
      </Layout>
    );
  }
}

export default connect(state => ({
  leadPages: filteredLeads(state),
  loading: state.leads.loading,
  currentPage: state.leads.page,
  univs: state.univs.univs,
  token: state.token,
  selectedCareers: state.careers.careers,
  count: state.careers.count,
  userCount: state.userCount.data,
  selections: state.query.selections,
  leadsCount: leadsCount(state),
}))(Leads);
