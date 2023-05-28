/*
给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和  bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
示例 1：
输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]
示例 2：
输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false
示例 3：
输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false
*/


function possibleBipartition(n: number, dislikes: number[][]): boolean {
    // 维护是否已经遍历过
    const visited: boolean[] = []
    // 分成两组 标记为不同的颜色
    const colors: boolean[] = new Array(n + 1).fill(false)
    let ok = true
    // dislikes 不是图 还需要构图

    const buildGraph = (n: number, dislikes: number[][]): number[][] => {
        const graph: number[][] = []
        for(let i=1;i<=n; i++){
            graph[i] = []
        }
        dislikes.forEach(edge => {
            let v = edge[0]
            let w = edge[1]
            graph[v].push(w)
            graph[w].push(v)
        })
        return graph
    }

    const DFS = (graph: number[][], cur: number) => {
        if(!ok) {
            return
        }
        visited[cur] = true
        graph[cur].forEach(person => {
            if(visited[person]) {
                if(colors[person] === colors[cur]) {
                    ok = false
                }
            }else{
                colors[person] = !colors[cur]
                DFS(graph, person)
            }
        })
    }

    const graph = buildGraph(n, dislikes)

    for(let index = 1; index <= n; index++) {
        if(ok && !visited[index]){
            DFS(graph, index)
        }
    }

    return ok
};


let n1 = 4;
let dislikes = [[1,2],[1,3],[2,4]];

console.log(possibleBipartition(n1, dislikes))

