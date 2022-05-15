import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

export default function StatsPokemon({ pokemonChosen }) {
  const data = [
    { nom: "PV", stat: `${pokemonChosen[0].stat}` },
    { nom: "Att.", stat: `${pokemonChosen[1].stat}` },
    { nom: "Déf.", stat: `${pokemonChosen[2].stat}` },
    { nom: "Att. S", stat: `${pokemonChosen[3].stat}` },
    { nom: "Déf. S", stat: `${pokemonChosen[4].stat}` },
    { nom: "Vit.", stat: `${pokemonChosen[5].stat}` },
  ];
  const d3Chart = useRef();
  // Ref nouvelles dimensions
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // Ref redimensionnement fenêtre
  const update = useRef(false);

  useEffect(() => {
    // Listenener pour redimensions fenêtre
    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Remplacement du graphique avec le nouveau aux bonnes dimensions
      if (update.current) {
        d3.selectAll("g").remove();
      } else {
        update.current = true;
      }
    });

    // Draw chart avec les données et les dimensions de la nouvelle fenêtre
    DrawChart(data, dimensions);
  }, [dimensions]);

  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  function DrawChart(data, dimensions) {
    // console.log(dimensions.width, dimensions.height)

    const chartwidth =
      parseInt(d3.select("#d3demo").style("width")) -
      margin.left -
      margin.right;
    const chartheight =
      parseInt(d3.select("#d3demo").style("height")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].nom)
          .tickSizeOuter(0)
      );

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, 150])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    // Draw bars
    svg
      .append("g")
      .attr("fill", "#65f0eb")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.stat))
      .attr("height", (d) => y(0) - y(d.stat))
      .attr("width", x.bandwidth());
  }

  return (
    <div id="d3demo" className="w-[30vw] h-[30vw]">
      <svg className="text-[10vw]" ref={d3Chart}></svg>
    </div>
  );
}
