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
var types = hexo.config.content_blocks.types;

const name_header = "hcb";
const default_type = "note";
const nh = name_header; // Shorten variable length
{
  var new_types = {};
  for (key in types) {
    new_types[name_header + key] = types[key];
  }
  types = new_types;
}

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

${all.map(x => `div.${nh}-content.${nh}-block.${x[0]}, details.${nh}-content.box.${x[0]}`).join(',')} {
  border: .05rem solid #448aff;
  border-radius: .2rem;
  font-size: 0.96rem;
  margin: 1.5625em 0;
  padding: 0 1.2rem;
  transition: box-shadow 250ms;
}
${all.map(x => `div.${nh}-content.${nh}-block.${x[0]}, details.${nh}-content.box.${x[0]} {
  border-color: ${x[1][0]};
}`).join('\n')}
${all.map(x => `div.${nh}-content.${nh}-block.${x[0]}:focus-within, details.${nh}-content.box.${x[0]}:focus-within {
  box-shadow: 0 0 0 .2rem ${x[1][0]}1a;
}`).join('\n')}
${all.map(x => `div.${nh}-content.${nh}-block.${x[0]} *, details.${nh}-content.box.${x[0]} *`).join(',')} {
  box-sizing: border-box;
}
${all.map(x => `div.${nh}-content.${nh}-block.${x[0]} > p.${nh}-content.${nh}-block-title, details.${nh}-content.box.${x[0]} > summary`).join(',')} {
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
${all.map(x => `details.${nh}-content.box.${x[0]} > summary`).join(',')} {
  cursor: pointer;
}
${all.map(x => `details.${nh}-content.box.${x[0]}:not([open]) > summary`).join(',')} {
  margin-bottom: 0;
}
${all.map(x => `div.${nh}-content.${nh}-block.${x[0]} > p.${nh}-content.${nh}-block-title, details.${nh}-content.box.${x[0]} > summary {
  background-color: ${x[1][0]}1a;
}`).join('\n')}
${all.map(x => `div.${nh}-content.${nh}-block.${x[0]} > p.${nh}-content.${nh}-block-title > i, details.${nh}-content.box.${x[0]} > summary > i {
  margin: 0 0.6rem 0 0.6rem;
  color: ${x[1][0]};
}`).join('\n')}
${all.map(x => `details.${nh}-content.box.${x[0]} > summary > div.${nh}-box-open-button`).join(',')} {
  float: right;
}
${all.map(x => `details.${nh}-content.box.${x[0]} > summary > div.${nh}-box-open-button > i`).join(',')} {
  margin: 0 0.6rem 0 0.6rem;
  font-size: 0.7rem;
  transition: transform 250ms
}
${all.map(x => `details.${nh}-content.box.${x[0]}:not([open]) > summary > div.${nh}-box-open-button i`).join(',')} {
  transform: rotate(270deg);
}
${all.map(x => `details.${nh}-content.box.${x[0]}[open] > summary > div.${nh}-box-open-button i`).join(',')} {
  transform: rotate(180deg);
}
${all.map(x => `details.${nh}-content.box.${x[0]} summary div.${nh}-box-open-button i {
  color: ${x[1][0]};
}`).join('\n')}
div.${nh}-content.${nh}-cards * {
  box-sizing: border-box;
}
input.${nh}-content.${nh}-cards-input {
  display: none;
}
div.${nh}-content.${nh}-cards-labels {
  position: relative;
  box-shadow: 0 -0.05rem #00000012 inset;
  display: flex;
  margin-bottom: 1.25rem;
}
div.${nh}-content.${nh}-cards-labels:before {
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
label.${nh}-content.${nh}-cards-label {
  border-bottom: 0.1rem solid #0000;
  border-radius: 0.1rem 0.1rem 0 0;
  cursor: pointer;
  color: #0000008a;
  font-size: 0.92em;
  font-weight: 700;
  padding: 0 1.25rem 0.625rem;
  transition: color 250ms;
}
label.${nh}-content.${nh}-cards-label.active, label.${nh}-content.${nh}-cards-label:hover {
  color: var(--cards-color);
}
div.${nh}-content.${nh}-cards-content {
  display: none;
}
div.${nh}-content.${nh}-cards-content.active {
  display: block;
}
`;

hexo.extend.helper.register('content_blocks_css', function() {
  return res;
});

hexo.extend.tag.register('contentblock', (args, content) => {
  var type = default_type, title = 'default_not_set';
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
  type = name_header + type;
  
  return `
<div class="${nh}-content ${nh}-block ${type}">
  <p class="${nh}-content ${nh}-block-title"><i class="${types[type][1]} fa-fw"></i>${title}</p>
  ${hexo.render.renderSync({ text: content, engine: 'markdown' }).trim().replace(/\n/g, '\n  ')}
</div>
`;
}, {ends: true});

hexo.extend.tag.register('contentbox', (args, content) => {
  var type = default_type, title = 'default_not_set', open = false;
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
  type = name_header + type;

  return `
<details class="${nh}-content box ${type}"${open ? ' open' : ''}>
  <summary><i class="${types[type][1]} fa-fw"></i>${title}<div class="${nh}-box-open-button"><i class="${openbutton} fa-fw"></i></div></summary>
  ${hexo.render.renderSync({ text: content, engine: 'markdown' }).trim().replace(/\n/g, '\n  ')}
</details>
`;
}, {ends: true});

var cards_tot = 0;
hexo.extend.tag.register('contentcards', (args, content) => {
  cards_tot++;
  var type = default_type, titles = [], color = undefined;
  for (var i = 0; i < args.length; ++i) {
    if (args[i].startsWith('type:')) {
      type = args[i].replace(/^type:/, '');
    } else if (args[i].startsWith('color:')) {
      color = args[i].replace(/^color:/, '');
    } else {
      titles.push(args[i].replace(/^title:/, ''));
    }
  }
  type = name_header + type;

  const contents = content.split(/<!-{2,}card-break-{2,}>/);
  color = color || types[type][0];
  return `
<div class="${nh}-content ${nh}-cards" id="${nh}-content_cards_${cards_tot}" style="--cards-color: ${color}">
  ${titles.map((title, i) => `<input${!i ? ' checked="checked"' : ''} class="${nh}-content ${nh}-cards-input" id="${nh}-content_cards_${cards_tot}_input_${i}" name="${nh}-content_cards_${cards_tot}_inputs" type="radio">`).join('\n')}
  <div class="${nh}-content ${nh}-cards-labels" id="${nh}-content_cards_${cards_tot}_labels" style="--md-indicator-x: 0px; --md-indicator-width: 0px;">
    ${titles.map((title, i) => `<label class="${nh}-content ${nh}-cards-label" id="${nh}-content_cards_${cards_tot}_label_${i}" for="${nh}-content_cards_${cards_tot}_input_${i}">${title}</label>`).join('\n')}
  </div>
  <div class="${nh}-content ${nh}-cards-contents" id="${nh}-content_cards_${cards_tot}_contents">
    ${titles.map((title, i) => `<div class="${nh}-content ${nh}-cards-content" id="${nh}-content_cards_${cards_tot}_content_${i}">${hexo.render.renderSync({ text: contents[i], engine: 'markdown' }).trim().replace(/\n/g, '\n  ')}</div>`).join('\n')}
  </div>
  <script>
    function select_${cards_tot}(id) {
      var x = 0;
      for (let i = 0; i < ${titles.length}; i++) {
        if (i == id) {
          document.getElementById("${nh}-content_cards_${cards_tot}_label_" + i).classList.add('active');
          document.getElementById("${nh}-content_cards_${cards_tot}_content_" + i).classList.add('active');
          document.getElementById("${nh}-content_cards_${cards_tot}_labels").style.setProperty("--md-indicator-x", x + "px");
          document.getElementById("${nh}-content_cards_${cards_tot}_labels").style.setProperty("--md-indicator-width", window.getComputedStyle(document.getElementById("${nh}-content_cards_${cards_tot}_label_" + i)).width);
        } else {
          document.getElementById("${nh}-content_cards_${cards_tot}_label_" + i).classList.remove('active');
          document.getElementById("${nh}-content_cards_${cards_tot}_content_" + i).classList.remove('active');
        }
        x = x + parseFloat(window.getComputedStyle(document.getElementById("${nh}-content_cards_${cards_tot}_label_" + i)).width);
      }
    }
    select_${cards_tot}(0);
    ${titles.map((title, i) => `document.getElementById("${nh}-content_cards_${cards_tot}_input_${i}").addEventListener("change", () => select_${cards_tot}(${i}))`).join('\n')}
  </script>
</div>
`;
}, {ends: true});
 
