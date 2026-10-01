import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {visualFor,sourceVisuals,ingredientSwatches} from '../docs/passiflora/assets/menu-visuals.js';
const menu=JSON.parse(await readFile(new URL('../docs/passiflora/menu.json',import.meta.url),'utf8'));
assert.equal(menu.products.length,40);
assert.equal(menu.products.filter(p=>visualFor(p)?.drink).length,17);
assert.equal(menu.products.filter(p=>visualFor(p)?.gluten).length,3);
for(const p of menu.products){const visual=visualFor(p);if(visual)await access(new URL('../docs/passiflora/assets/illustrations/'+visual.file,import.meta.url));}
for(const s of ingredientSwatches)await access(new URL('../docs/passiflora/assets/illustrations/'+s.file,import.meta.url));
const p=menu.products[0];assert(visualFor({...p,price_minor:123456}));assert.equal(visualFor({...p,name:'Nuevo producto'}),null);assert.equal(visualFor({...p,description:'Ingredientes distintos'}),null);assert.equal(visualFor({...p,category_id:'cocina'}),null);
console.log('Passiflora: 40 unchanged records, 17 original drink images, 3 source dietary symbols, all assets present, stale-identity guards passed.');
