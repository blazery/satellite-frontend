import '../style/Searchbar.css';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { GlobalState } from '../reducers';
import { filterPublications } from '../actions';
import { ChangeEvent } from 'react';

function Searchbar({ actions: { filterPublications } }: PropsFromRedux) {
   let searchTerms: string[] = [];
   return (
      <div className="searchbar">
         <input
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
               searchTerms = event.target.value.split(';').map((term) => term.trim());
            }}
            type="text"
            placeholder="Search. Seperate terms with ';'."
            name="search"
            onKeyUp={(event: React.KeyboardEvent) => {
               if (event.key === 'Enter') {
                  filterPublications(searchTerms);
               }
            }}
         />
         <button
            type="button"
            onClick={() => {
               filterPublications(searchTerms);
            }}
         >
            <i className="fa fa-search" />
         </button>
      </div>
   );
}
const mapStateToProps = (state: GlobalState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
   actions: {
      filterPublications: (searchTerms: string[]) => {
         dispatch(filterPublications(searchTerms));
      },
   },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Searchbar);
