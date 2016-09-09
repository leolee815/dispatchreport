import fetch from 'isomorphic-fetch'

export function search(){
    return {
        type:"SEARCH",
    }
}
export function searchOrder(){
    // return fetch('../../../../testdata/list.json')
    //      .then(response => response.json())
    //      .then(json => {
    //          setTimeout(() => {
    //              dispatch(refreshSuccess(json && json.data.list));
    //          }, 3000);
    //      });
    return {
        type:"SEARCH_ORDER",
    }
}
