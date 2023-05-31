(function() {var implementors = {
"polkadot_runtime_common":[["impl&lt;T: <a class=\"trait\" href=\"polkadot_runtime_parachains/configuration/pallet/trait.Config.html\" title=\"trait polkadot_runtime_parachains::configuration::pallet::Config\">Config</a> + <a class=\"trait\" href=\"polkadot_runtime_parachains/dmp/pallet/trait.Config.html\" title=\"trait polkadot_runtime_parachains::dmp::pallet::Config\">Config</a>, W: <a class=\"trait\" href=\"xcm/trait.WrapVersion.html\" title=\"trait xcm::WrapVersion\">WrapVersion</a>, P: <a class=\"trait\" href=\"polkadot_runtime_common/xcm_sender/trait.PriceForParachainDelivery.html\" title=\"trait polkadot_runtime_common::xcm_sender::PriceForParachainDelivery\">PriceForParachainDelivery</a>&gt; <a class=\"trait\" href=\"xcm/v3/traits/trait.SendXcm.html\" title=\"trait xcm::v3::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"polkadot_runtime_common/xcm_sender/struct.ChildParachainRouter.html\" title=\"struct polkadot_runtime_common::xcm_sender::ChildParachainRouter\">ChildParachainRouter</a>&lt;T, W, P&gt;"]],
"polkadot_test_runtime":[["impl <a class=\"trait\" href=\"xcm/v3/traits/trait.SendXcm.html\" title=\"trait xcm::v3::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"polkadot_test_runtime/xcm_config/struct.DoNothingRouter.html\" title=\"struct polkadot_test_runtime::xcm_config::DoNothingRouter\">DoNothingRouter</a>"]],
"xcm":[],
"xcm_builder":[["impl&lt;Inner: <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a>, TopicSource: SourceTopic&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_builder/struct.WithTopicSource.html\" title=\"struct xcm_builder::WithTopicSource\">WithTopicSource</a>&lt;Inner, TopicSource&gt;"],["impl&lt;Inner: <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a>&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_builder/struct.WithUniqueTopic.html\" title=\"struct xcm_builder::WithUniqueTopic\">WithUniqueTopic</a>&lt;Inner&gt;"],["impl&lt;Bridges: <a class=\"trait\" href=\"xcm_builder/trait.ExporterFor.html\" title=\"trait xcm_builder::ExporterFor\">ExporterFor</a>, Router: <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a>, UniversalLocation: Get&lt;<a class=\"type\" href=\"xcm_builder/test_utils/type.InteriorMultiLocation.html\" title=\"type xcm_builder::test_utils::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_builder/struct.SovereignPaidRemoteExporter.html\" title=\"struct xcm_builder::SovereignPaidRemoteExporter\">SovereignPaidRemoteExporter</a>&lt;Bridges, Router, UniversalLocation&gt;"],["impl&lt;Exporter: <a class=\"trait\" href=\"xcm_executor/traits/export/trait.ExportXcm.html\" title=\"trait xcm_executor::traits::export::ExportXcm\">ExportXcm</a>, UniversalLocation: Get&lt;<a class=\"type\" href=\"xcm_builder/test_utils/type.InteriorMultiLocation.html\" title=\"type xcm_builder::test_utils::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_builder/struct.UnpaidLocalExporter.html\" title=\"struct xcm_builder::UnpaidLocalExporter\">UnpaidLocalExporter</a>&lt;Exporter, UniversalLocation&gt;"],["impl&lt;Bridges: <a class=\"trait\" href=\"xcm_builder/trait.ExporterFor.html\" title=\"trait xcm_builder::ExporterFor\">ExporterFor</a>, Router: <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a>, UniversalLocation: Get&lt;<a class=\"type\" href=\"xcm_builder/test_utils/type.InteriorMultiLocation.html\" title=\"type xcm_builder::test_utils::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"xcm_builder/test_utils/trait.SendXcm.html\" title=\"trait xcm_builder::test_utils::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_builder/struct.UnpaidRemoteExporter.html\" title=\"struct xcm_builder::UnpaidRemoteExporter\">UnpaidRemoteExporter</a>&lt;Bridges, Router, UniversalLocation&gt;"]],
"xcm_fuzzer":[["impl <a class=\"trait\" href=\"xcm/v3/traits/trait.SendXcm.html\" title=\"trait xcm::v3::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_fuzzer/struct.RelayChainXcmRouter.html\" title=\"struct xcm_fuzzer::RelayChainXcmRouter\">RelayChainXcmRouter</a>"],["impl&lt;T: Get&lt;<a class=\"struct\" href=\"polkadot_parachain/primitives/struct.Id.html\" title=\"struct polkadot_parachain::primitives::Id\">ParaId</a>&gt;&gt; <a class=\"trait\" href=\"xcm/v3/traits/trait.SendXcm.html\" title=\"trait xcm::v3::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_fuzzer/struct.ParachainXcmRouter.html\" title=\"struct xcm_fuzzer::ParachainXcmRouter\">ParachainXcmRouter</a>&lt;T&gt;"]],
"xcm_simulator":[],
"xcm_simulator_example":[["impl <a class=\"trait\" href=\"xcm/v3/traits/trait.SendXcm.html\" title=\"trait xcm::v3::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_simulator_example/struct.RelayChainXcmRouter.html\" title=\"struct xcm_simulator_example::RelayChainXcmRouter\">RelayChainXcmRouter</a>"],["impl&lt;T: Get&lt;<a class=\"struct\" href=\"polkadot_parachain/primitives/struct.Id.html\" title=\"struct polkadot_parachain::primitives::Id\">ParaId</a>&gt;&gt; <a class=\"trait\" href=\"xcm/v3/traits/trait.SendXcm.html\" title=\"trait xcm::v3::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_simulator_example/struct.ParachainXcmRouter.html\" title=\"struct xcm_simulator_example::ParachainXcmRouter\">ParachainXcmRouter</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()