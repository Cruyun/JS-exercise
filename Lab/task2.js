/* 控制台console如下表格，具体题目描述请移步到[Eloquent javascript 06-Object Laying out a table]

```
name         height country      
------------ ------ -------------
Kilimanjaro    5895 Tanzania     
Everest        8848 Nepal        
Mount Fuji     3776 Japan        
Mont Blanc     4808 Italy/France 
Vaalserberg     323 Netherlands  
Denali         6168 United States
Popocatepetl   5465 Mexico 
```

表格的data以数组传入
```
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
```
*/
//使用map逐行处理rows数组，在map的函数中使用reduce计算每个单元格数组中单元格的最大高度
function rowHeight(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}
//调用第一行单元格数组的map方法，使用map函数的第二个参数（表示列索引编号）来创建一个数组，
//数组中的每个元素表示表格每一列的最大宽度。随后调用rows数组的reduce方法逐行遍历，计算出当前这一列单元格的最大宽度并且填入map函数创建的数组中
function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
};

function drawTable(rows) {
    var height = rowHeight(rows);
    var width = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return blocks[lineNo];
        }).join(" ");
    }
    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(width[colNum], height[rowNum]);
        });
        return blocks[0].map(function(_,lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function Textcell(text) {
    this.text = text.split("\n");
}

Textcell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
Textcell.prototype.minHeight = function() {
    return this.text.length;
}

Textcell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function UnderlineCell(inner) {
    this.inner = inner;
};
UnderlineCell.prototype.minHeight = function() {
    return this.inner.minHeight + 1;
}
UnderlineCell.prototype.minWidth = function() {
    return this.inner.minWidth;
}
UnderlineCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
      .concat([repeat("-", width)])
}
function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlineCell(new Textcell(name));
    })
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new Textcell(String(row[name]));
        })
    })
    return [headers].concat(body);
}

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

console.log(dataTable(dataTable(MOUNTAINS)))
