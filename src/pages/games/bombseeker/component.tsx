import './design.scss';

import React, { Fragment } from 'react';

interface State {
  fields: Field[];
  gameover: boolean;
  fieldSize: number;
}
export class BombSeeker extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fields: [],
      fieldSize: 10,
      gameover: true
    };
  }
  createField = (fieldSize: number) => {
    let fields: Field[] = [];
    [...Array(fieldSize).fill(1)].forEach((value, x) =>
      [...Array(fieldSize).fill(1)].forEach((value, y) => {
        fields.push({
          id: x * 10 + y,
          row: x + 1,
          column: y + 1,
          bombed: Math.floor(Math.random() * 10) > 6,
          revealed: false,
          flagged: false,
          neighbourBombed: 0
        });
      })
    );
    let updateFields: Field[] = fields.map((item, index) => {
      let bombNumber = 0;
      if (item.bombed === false) {
        if (
          fields[index - 1] &&
          fields[index - 1].column === item.column - 1 &&
          fields[index - 1].row === item.row &&
          fields[index - 1].bombed
        )
          bombNumber++;
        if (
          fields[index + 1] &&
          fields[index + 1].column === item.column + 1 &&
          fields[index + 1].row === item.row &&
          fields[index + 1].bombed
        )
          bombNumber++;
        if (
          fields[index + 10] &&
          fields[index + 10].column === item.column &&
          fields[index + 10].row === item.row + 1 &&
          fields[index + 10].bombed
        )
          bombNumber++;
        if (
          fields[index - 10] &&
          fields[index - 10].column === item.column &&
          fields[index - 10].row === item.row - 1 &&
          fields[index - 10].bombed
        )
          bombNumber++;
        if (
          fields[index - 11] &&
          fields[index - 11].column === item.column - 1 &&
          fields[index - 11].row === item.row - 1 &&
          fields[index - 11].bombed
        )
          bombNumber++;
        if (
          fields[index - 9] &&
          fields[index - 9].column === item.column + 1 &&
          fields[index - 9].row === item.row - 1 &&
          fields[index - 9].bombed
        )
          bombNumber++;
        if (
          fields[index + 11] &&
          fields[index + 11].column === item.column + 1 &&
          fields[index + 11].row === item.row + 1 &&
          fields[index + 11].bombed
        )
          bombNumber++;
        if (
          fields[index + 9] &&
          fields[index + 9].column === item.column - 1 &&
          fields[index + 9].row === item.row + 1 &&
          fields[index + 9].bombed
        )
          bombNumber++;
      }
      return { ...item, neighbourBombed: bombNumber };
    });
    this.setState({
      ...this.state,
      fieldSize,
      fields: updateFields,
      gameover: false
    });
  };
  fieldClicked = (field: Field) => {
    this.state.fields.forEach(item => {
      if (
        item.column === field.column &&
        item.row === field.row &&
        item.bombed === true
      ) {
        this.gameOver();
        return;
      }
      if (
        item.column === field.column &&
        item.row === field.row &&
        item.bombed === false
      ) {
        this.checksweeper([field]);
      }
    });
  };
  checksweeper(fields: Field[]) {
    let News: Field[] = [];
    fields.forEach(item => {
      if (item.revealed === false && item.neighbourBombed !== 0) {
        this.setState({
          ...this.state,
          fields: this.state.fields.map(x => {
            if (item.id === x.id) {
              return { ...x, revealed: true };
            } else return x;
          })
        });
      } else {
        const right = this.state.fields.find(
          right => right.column === item.column + 1 && right.row === item.row
        );
        const left = this.state.fields.find(
          left => left.column === item.column - 1 && left.row === item.row
        );
        const top = this.state.fields.find(
          top => top.row === item.row - 1 && top.column === item.column
        );
        const bottom = this.state.fields.find(
          bottom => bottom.column === item.column && bottom.row === item.row + 1
        );
        const leftbottom = this.state.fields.find(
          leftbottom =>
            leftbottom.column === item.column - 1 &&
            leftbottom.row === item.row + 1
        );
        const rightbottom = this.state.fields.find(
          rightbottom =>
            rightbottom.column === item.column + 1 &&
            rightbottom.row === item.row + 1
        );
        const lefttop = this.state.fields.find(
          lefttop =>
            lefttop.column === item.column - 1 && lefttop.row === item.row - 1
        );
        const righttop = this.state.fields.find(
          righttop =>
            righttop.column === item.column + 1 && righttop.row === item.row - 1
        );

        if (!!right && !right.revealed) News.push(right);
        if (!!left && !left.revealed) News.push(left);
        if (!!top && !top.revealed) News.push(top);
        if (!!bottom && !bottom.revealed) News.push(bottom);
        if (!!leftbottom && !leftbottom.revealed) News.push(leftbottom);
        if (!!rightbottom && !rightbottom.revealed) News.push(rightbottom);
        if (!!lefttop && !lefttop.revealed) News.push(lefttop);
        if (!!righttop && !righttop.revealed) News.push(righttop);

        if (!item.revealed) {
          this.setState({
            ...this.state,
            fields: this.state.fields.map(x => {
              if (item.id === x.id) {
                return { ...x, revealed: true };
              } else return x;
            })
          });
        }
      }
    });
    setTimeout(() => {
      News.length > 0 && this.checksweeper(News);
    }, 100);
  }

  gameOver() {
    alert("hehehe");
    this.setState({
      ...this.state,
      gameover: true,
      fields: this.state.fields.map(x => ({ ...x, revealed: true }))
    });
  }
  checkWin() {
    let win = true;
    this.state.fields.forEach(item => {
      if (
        !((item.bombed && !item.revealed) || (!item.bombed && item.revealed))
      ) {
        win = false;
        return;
      }
    });
    win === true ? alert("nyertél") : alert("vesztettél");
    this.setState({
      ...this.state,
      gameover: true
    });
  }
  flagField(item: Field) {
    const newFields = [
      ...this.state.fields.map(currentItem => {
        if (currentItem === item) {
          return { ...currentItem, flagged: true };
        } else {
          return currentItem;
        }
      })
    ];
    this.setState({ ...this.state, fields: newFields });
  }
  render() {
    return (
      <>
        <div className="bomb-seeker-options">
          <p onClick={() => this.createField(10)}>Új játék</p>
          {this.state.gameover === false && (
            <p onClick={() => this.checkWin()}>Ellenőrzés</p>
          )}
        </div>
        <div className="bomb-seeker">
          {this.state.fields.length > 0 &&
            this.state.fields.map((item, index) => (
              <Fragment key={item.id}>
                {this.state.fields[index - 1] &&
                  item.row !== this.state.fields[index - 1].row && (
                    <br className="next-line"></br>
                  )}
                <div
                  onDoubleClick={() => {
                    this.flagField(item);
                  }}
                  className={`hide ${item.revealed ? "revelead" : ""} ${
                    item.revealed && item.bombed ? "gameover" : ""
                  } ${item.flagged ? "flagged" : ""}`}
                  onClick={() => !item.revealed && this.fieldClicked(item)}
                >
                  <p>{item.revealed ? item.neighbourBombed : "X"}</p>
                </div>
              </Fragment>
            ))}
        </div>
      </>
    );
  }
}
export default BombSeeker;

interface Field {
  id: number;
  row: number;
  neighbourBombed: number;
  column: number;
  bombed: boolean;
  revealed: boolean;
  flagged: boolean;
}
