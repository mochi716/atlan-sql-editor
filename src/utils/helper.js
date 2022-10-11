export const parseCSV = (text, rowDelimiter = "\n", entryDelimiter = ",") => {
    const lines = text.split(rowDelimiter);
    const headers = lines[0].split(entryDelimiter);
    const rows = [];
    lines.slice(1, lines.length - 1).forEach((line, ind) => {
      const entries = line.split(entryDelimiter);
      const obj = {id: ind + 1};
      headers.forEach((header, index) => {
        obj[header] = index < entries.length ? entries[index] : null;
      });
      rows.push(obj);
    });
    return {headers, rows};
};

export const getIndexFromId = (tabs, id) => {
  for(let i=0; i<tabs.length; i++){
    if(tabs[i].id === id){
      return i;
    }
  }
  return -1;
};

export const getTabIndexFromId = (tabs, id) => {
  for(let i=0; i<tabs.length; i++){
    if(tabs[i].id === id){
      return i;
    }
  }
  return 0;
};

export const getHistoryTime = () => {
  let now = new Date();
  let hh = now.getHours();
  hh = hh > 10 ? hh : '0' + hh;
  return `${hh}:${now.getMinutes()}`
};