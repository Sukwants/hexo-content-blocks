/********** Hexo Plugin: hexo-content-blocks ********** 
 *    _____       _                         _         * 
 *   / ____|     | |                       | |        * 
 *  | (___  _   _| | ____      ____ _ _ __ | |_ ___   * 
 *   \___ \| | | | |/ /\ \ /\ / / _` | '_ \| __/ __|  * 
 *   ____) | |_| |   <  \ V  V / (_| | | | | |_\__ \  * 
 *  |_____/ \__,_|_|\_\  \_/\_/ \__,_|_| |_|\__|___/  * 
 *                                                    * 
 ****************** Made By Sukwants ******************/


const openbutton = hexo.config.content_blocks.open_button;
const types = hexo.config.content_blocks.types;

for (const i in types) {
  types[i] = types[i].split('||');
  types[i][0] = types[i][0].trim();
  types[i][1] = types[i][1].trim();
  if (!types[i][0].startsWith('#')) {
    types[i][0] = '#' + types[i][0];
  }
}

const all = Object.entries(types);

const res = `
${all.map(x => `div.content.block.${x[0]}, details.content.box.${x[0]}`).join(',')} {
  border: .05rem solid #448aff;
  border-radius: .2rem;
  font-size: 0.96rem;
  margin: 1.5625em 0;
  padding: 0 1.2rem;
  transition: box-shadow 250ms;
}
${all.map(x => `div.content.block.${x[0]}, details.content.box.${x[0]} {
  border-color: ${x[1][0]};
}`).join('\n')}
${all.map(x => `div.content.block.${x[0]}:focus-within, details.content.box.${x[0]}:focus-within {
  box-shadow: 0 0 0 .2rem ${x[1][0]}1a;
}`).join('\n')}
${all.map(x => `div.content.block.${x[0]} *, details.content.box.${x[0]} *`).join(',')} {
  box-sizing: border-box;
}
${all.map(x => `div.content.block.${x[0]} > p.content.block-title, details.content.box.${x[0]} > summary`).join(',')} {
  border-top-right-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
  border-left-width: 0.2rem;
  display: block;
  min-height: 1rem;
  border: none;
  font-weight: 700;
  margin: 0 -1.2rem 1rem;
  padding: 0.4rem 0.6rem;
  position: relative;
  outline: none;
}
${all.map(x => `details.content.box.${x[0]} > summary`).join(',')} {
  cursor: pointer;
}
${all.map(x => `details.content.box.${x[0]}:not([open]) > summary`).join(',')} {
  margin-bottom: 0;
}
${all.map(x => `div.content.block.${x[0]} > p.content.block-title, details.content.box.${x[0]} > summary {
  background-color: ${x[1][0]}1a;
}`).join('\n')}
${all.map(x => `div.content.block.${x[0]} > p.content.block-title > i, details.content.box.${x[0]} > summary > i {
  margin: 0 0.6rem 0 0.6rem;
  color: ${x[1][0]};
}`).join('\n')}
${all.map(x => `details.content.box.${x[0]} > summary > div.box-open-button`).join(',')} {
  float: right;
}
${all.map(x => `details.content.box.${x[0]} > summary > div.box-open-button > i`).join(',')} {
  margin: 0 0.6rem 0 0.6rem;
  font-size: 0.7rem;
  transition: transform 250ms
}
${all.map(x => `details.content.box.${x[0]}:not([open]) > summary > div.box-open-button i`).join(',')} {
  transform: rotate(270deg);
}
${all.map(x => `details.content.box.${x[0]}[open] > summary > div.box-open-button i`).join(',')} {
  transform: rotate(180deg);
}
${all.map(x => `details.content.box.${x[0]} summary div.box-open-button i {
  color: ${x[1][0]};
}`).join('\n')}
div.content.cards * {
  box-sizing: border-box;
}
input.content.cards-input {
  display: none;
}
div.content.cards-labels {
  position: relative;
  box-shadow: 0 -0.05rem #00000012 inset;
  display: flex;
  margin-bottom: 1.25rem;
}
div.content.cards-labels:before {
  background: var(--cards-color);
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 0;
  position: absolute;
  transform: translateX(var(--md-indicator-x));
  transition: width 225ms, transform 250ms;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  width: var(--md-indicator-width);
}
label.content.cards-label {
  border-bottom: 0.1rem solid #0000;
  border-radius: 0.1rem 0.1rem 0 0;
  cursor: pointer;
  color: #0000008a;
  font-size: 0.92em;
  font-weight: 700;
  padding: 0 1.25rem 0.625rem;
  transition: color 250ms;
}
label.content.cards-label.active, label.content.cards-label:hover {
  color: var(--cards-color);
}
div.content.cards-content {
  display: none;
}
div.content.cards-content.active {
  display: block;
}
`;

hexo.extend.helper.register('content_blocks_css', function() {
  return res;
});

hexo.extend.tag.register('contentblock', (args, content) => {
  var type = 'note', title = 'default_not_set';
  for (var i = 0; i < args.length; ++i) {
    if (args[i].startsWith('type:')) {
      type = args[i].replace(/^type:/, '');
    } else {
      title = args[i].replace(/^title:/, '');
    }
  }
  if (title == 'default_not_set') {
    title = type.substring(0, 1).toUpperCase() + type.substring(1);
  }
  return `
<div class="content block ${type}">
  <p class="content block-title"><i class="${types[type][1]} fa-fw"></i>${title}</p>
  ${hexo.render.renderSync({ text: content, engine: 'markdown' }).trim().replace(/\n/g, '\n  ')}
</div>
`;
}, {ends: true});

hexo.extend.tag.register('contentbox', (args, content) => {
  var type = 'note', title = 'default_not_set', open = false;
  for (var i = 0; i < args.length; ++i) {
    if (args[i].startsWith('type:')) {
      type = args[i].replace(/^type:/, '');
    } else if (args[i] == 'open') {
      open = true;
    } else {
      title = args[i].replace(/^title:/, '');
    }
  }
  if (title == 'default_not_set') {
    title = type.substring(0, 1).toUpperCase() + type.substring(1);
  }
  return `
<details class="content box ${type}"${open ? ' open' : ''}>
  <summary><i class="${types[type][1]} fa-fw"></i>${title}<div class="box-open-button"><i class="${openbutton} fa-fw"></i></div></summary>
  ${hexo.render.renderSync({ text: content, engine: 'markdown' }).trim().replace(/\n/g, '\n  ')}
</details>
`;
}, {ends: true});

var cards_tot = 0;
hexo.extend.tag.register('contentcards', (args, content) => {
  cards_tot++;
  var type = 'note', titles = [], color = undefined;
  for (var i = 0; i < args.length; ++i) {
    if (args[i].startsWith('type:')) {
      type = args[i].replace(/^type:/, '');
    } else if (args[i].startsWith('color:')) {
      color = args[i].replace(/^color:/, '');
    } else {
      titles.push(args[i].replace(/^title:/, ''));
    }
  }

  const contents = content.split(/<!-{2,}card-break-{2,}>/);
  color = color || types[type][0];
  return `
<div class="content cards" id="content_cards_${cards_tot}" style="--cards-color: ${color}">
  ${titles.map((title, i) => `<input${!i ? ' checked="checked"' : ''} class="content cards-input" id="content_cards_${cards_tot}_input_${i}" name="content_cards_${cards_tot}_inputs" type="radio">`).join('\n')}
  <div class="content cards-labels" id="content_cards_${cards_tot}_labels" style="--md-indicator-x: 0px; --md-indicator-width: 0px;">
    ${titles.map((title, i) => `<label class="content cards-label" id="content_cards_${cards_tot}_label_${i}" for="content_cards_${cards_tot}_input_${i}">${title}</label>`).join('\n')}
  </div>
  <div class="content cards-contents" id="content_cards_${cards_tot}_contents">
    ${titles.map((title, i) => `<div class="content cards-content" id="content_cards_${cards_tot}_content_${i}">${hexo.render.renderSync({ text: contents[i], engine: 'markdown' }).trim().replace(/\n/g, '\n  ')}</div>`).join('\n')}
  </div>
  <script>
    function select_${cards_tot}(id) {
      var x = 0;
      for (let i = 0; i < ${titles.length}; i++) {
        if (i == id) {
          document.getElementById("content_cards_${cards_tot}_label_" + i).classList.add('active');
          document.getElementById("content_cards_${cards_tot}_content_" + i).classList.add('active');
          document.getElementById("content_cards_${cards_tot}_labels").style.setProperty("--md-indicator-x", x + "px");
          document.getElementById("content_cards_${cards_tot}_labels").style.setProperty("--md-indicator-width", window.getComputedStyle(document.getElementById("content_cards_${cards_tot}_label_" + i)).width);
        } else {
          document.getElementById("content_cards_${cards_tot}_label_" + i).classList.remove('active');
          document.getElementById("content_cards_${cards_tot}_content_" + i).classList.remove('active');
        }
        x = x + parseFloat(window.getComputedStyle(document.getElementById("content_cards_${cards_tot}_label_" + i)).width);
      }
    }
    select_${cards_tot}(0);
    ${titles.map((title, i) => `document.getElementById("content_cards_${cards_tot}_input_${i}").addEventListener("change", () => select_${cards_tot}(${i}))`).join('\n')}
  </script>
</div>
`;
}, {ends: true});
 
