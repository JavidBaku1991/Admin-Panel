import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../components/theme.js";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mochData.js";


const PieChart =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ResponsivePie
        data={data}
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        valueFormat=" >-"
        startAngle={-22}
        innerRadius={0.3}
        padAngle={4}
        activeOuterRadiusOffset={5}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.6'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={29}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsOffset={6}
        arcLinkLabelsDiagonalLength={19}
        arcLinkLabelsStraightLength={29}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsSkipAngle={17}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.9'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 10,
                symbolSize: 20,
                itemDirection: 'left-to-right'
            }
        ]}
    />
    )
}


export default PieChart;