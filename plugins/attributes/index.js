var React = require('react/addons')
var css = require('./index.less');
var cx = React.addons.classSet

module.exports = {
  node: {
    blocks: {
      belowbody: function (node, actions) {
        if(!node.attributes || !node.attributes.length) return;
        var attributes = [];
        for (var i = node.attributes.length - 1; i >= 0; i--) {
          attributes.push(<div className="attribute" key={i}>{node.attributes[i].value}</div>);
        }
        return <div>
          {attributes}
        </div>;
        // return <div className={cx({
        //   'm_Todo': true,
        //   'm_Todo-done': node.done,
        // })} key="todo"}/>
      }
    },
  },
}