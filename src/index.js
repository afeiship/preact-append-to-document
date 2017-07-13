import { h,render } from 'preact';

export default function(inComponent,inProps,inAttrs){
  const props = inProps || {};
  const body = document.body;
  let div = document.createElement('div');
  let component;

  for (let attr in inAttrs) {
    if (inAttrs.hasOwnProperty(attr)) {
      div[attr]=inAttrs[attr];
    }
  }

  body.appendChild(div);
  component = render( h(inComponent,inProps) ,div);

  return {
    component,
    destroy:function(){
      component = null;
      body.removeChild(div);
    }
  };
};
