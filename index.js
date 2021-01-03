class NthChild {
    constructor(nth){
      this.nth = nth
    }

    nthChild(){
        const  nth  = this.nth;
        return function ({addVariant }) {
          addVariant('nth-child', ({ modifySelectors, separator }) => {
              modifySelectors(({ className }) => {
                let css = '.nth-child' + "\\"+ separator + className  + `>*:nth-child(${nth})`
                console.log(nth)
                return css;
              });
          })
        }
    }
}

module.exports = NthChild;