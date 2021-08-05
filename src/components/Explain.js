import React from "react";
import Ptext from "./Ptext";
import styled from "styled-components";

const Exp = styled.div`
  .exp {
    padding: 10px;
    background-color: #80808014;
  }

  p {
    color: grey;
    font-family: "Segoe UI", sans-serif;
    font-weight: "lighter";
  }
  p br {
    font-family: "Segoe UI", sans-serif;
  }
`;
const Explain = () => {
  return (
    <Exp>
      <Ptext>
        <div className="exp">
          <p>
            Parent: [-1, 0, 0, 1, 2, 2, 4, 4]
            <br />
            Index: [0, 1, 2, 3, 4, 5, 6, 7]
            <br /> ◼1is present at index 0, which implies that the binary tree
            root is node 0.
            <br />◼ 0is present at index 1 and 2, which implies that the left
            and right children of node 0 are 1 and 2. 1 is present at index 3,
            which implies that the left or the right child of node <br />
            ◼1 is 3. 2is present at index 4 and 5, which implies that the left
            and right children of node 2 are 4 and 5. 4is present at index 6 and
            7, which implies that the left and right children of node 4 are 6
            and7.
            <br />
            <br />
            The time complexity of the above solution is 0(n2), where n is the
            total number of nodes in the binary tree. The | auxiliary space
            required by the program is O(h) for the call stack, where h is the
            height of the tree. 1
            <br />
            <br />
            Note that the findDepth() routine has an optimal substructure since
            it can be recursively broken down into smaller sub-routines, ie.,
            findDepth(i) = 1 + FindDepth(parent[i]) . It also exhibits
            overlapping subproblems since the same subproblem is solved over and
            over again.
          </p>
        </div>
      </Ptext>
    </Exp>
  );
};

export default Explain;
