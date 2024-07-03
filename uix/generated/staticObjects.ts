
// Start of File
import uixConfig from '../../uix.config'

import { NodeShape, NodeState, createNeo4jClient } from '@thinairthings/uix'
export type ConfiguredNodeTypeMap = typeof uixConfig.graph.nodeTypeMap

export const nodeTypeMap = uixConfig.graph.nodeTypeMap
export type NodeKey<T extends keyof ConfiguredNodeTypeMap> = {
    nodeType: T
    nodeId: string
}
export const rootNodeKey: NodeKey<'Root'> = {nodeType: 'Root', nodeId: '0'}
export type WorkExperienceNode = NodeShape<ConfiguredNodeTypeMap['WorkExperience']> 
export type WorkPreferenceNode = NodeShape<ConfiguredNodeTypeMap['WorkPreference']> 
export type ProfileNode = NodeShape<ConfiguredNodeTypeMap['Profile']> 
export type EducationNode = NodeShape<ConfiguredNodeTypeMap['Education']> 
export type UserNode = NodeShape<ConfiguredNodeTypeMap['User']> 
export type RootNode = NodeShape<ConfiguredNodeTypeMap['Root']> 
export type JobNode = NodeShape<ConfiguredNodeTypeMap['Job']> 

export type WorkExperienceNodeState = NodeState<ConfiguredNodeTypeMap['WorkExperience']> 
export type WorkPreferenceNodeState = NodeState<ConfiguredNodeTypeMap['WorkPreference']> 
export type ProfileNodeState = NodeState<ConfiguredNodeTypeMap['Profile']> 
export type EducationNodeState = NodeState<ConfiguredNodeTypeMap['Education']> 
export type UserNodeState = NodeState<ConfiguredNodeTypeMap['User']> 
export type RootNodeState = NodeState<ConfiguredNodeTypeMap['Root']> 
export type JobNodeState = NodeState<ConfiguredNodeTypeMap['Job']> 


export const driver = createNeo4jClient({
    uri: process.env.NEO4J_URI!,
    username: process.env.NEO4J_USERNAME!,
    password: process.env.NEO4J_PASSWORD!
}, { disableLosslessIntegers: true })
