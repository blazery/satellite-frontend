import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { GlobalState } from '../reducers';
import '../style/Content.css';
import Post from './Post';
import { postSelector } from "../selectors"

function Content({ filteredPublications }: PropsFromRedux) {
   return (
      <div className="content-container">
         {filteredPublications.map((p) => (
            <Post publication={p} />
         ))}
      </div>
   );
}

const mapStateToProps = (state: GlobalState) => ({
   filteredPublications: postSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Content);
