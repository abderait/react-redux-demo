import react, { Component } from 'react';

class PageList extends Component {

        renderPageList(){
            return this.props.pages.map((page) => {
                return (
                    <div key={page.id}>{page.title}</div>                                
                )
            }
            )
        }

        render() {
            return (
                {this.renderPageList()}
            )
        }
}
export default PageList;