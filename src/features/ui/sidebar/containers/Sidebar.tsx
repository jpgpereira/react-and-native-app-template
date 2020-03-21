import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';
import {actions} from '../';
import {selectors} from '../';

const mapStateToProps = state => {
  const show = selectors.isOpened(state);
  return {show};
};

const {open, close} = actions;

const mapDispatchToProps = {
  open,
  close,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
